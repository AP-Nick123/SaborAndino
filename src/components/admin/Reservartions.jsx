import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Swal from 'sweetalert2';
import { getReservations, deleteReservation, updateReservation } from '../../services/firebaseReservations';
import './Reservations.css';

const formatDateTime = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  });
};

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [editingRes, setEditingRes] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const data = await getReservations();
      setReservations(data);
    } catch (err) {
      setError('Error al cargar las reservas: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: '¿Eliminar esta reserva?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (confirm.isConfirmed) {
      try {
        await deleteReservation(id);
        fetchReservations();
        Swal.fire('Eliminado', 'La reserva ha sido eliminada.', 'success');
      } catch {
        Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error');
      }
    }
  };

  const openEditModal = (res) => {
    setEditingRes(res);
    setEditForm({
      name: res.name || '',
      date: res.date || '',
      time: res.time || '',
      guests: res.guests || 1,
      status: res.status || 'sinconfirmar',
      email: res.email || '',
      phone: res.phone || '',
      specialRequests: res.specialRequests || '',
    });
  };

  const closeEditModal = () => {
    setEditingRes(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async () => {
    try {
      await updateReservation(editingRes.id, editForm);
      closeEditModal();
      fetchReservations();
      Swal.fire('Actualizado', 'La reserva se ha actualizado.', 'success');
    } catch {
      Swal.fire('Error', 'No se pudo actualizar la reserva.', 'error');
    }
  };

  const headers = [
    { label: 'Cliente', key: 'name' },
    { label: 'Fecha', key: 'date' },
    { label: 'Hora', key: 'time' },
    { label: 'Comensales', key: 'guests' },
    { label: 'Estado', key: 'status' },
    { label: 'Email', key: 'email' },
    { label: 'Teléfono', key: 'phone' },
    { label: 'Peticiones Especiales', key: 'specialRequests' },
  ];

  const csvData = reservations.map(({ name, date, time, guests, status, email, phone, specialRequests }) => ({
    name, date, time, guests, status, email, phone, specialRequests
  }));

  const statusClass = (status) => {
    switch (status) {
      case 'confirmado': return 'status-confirmed';
      case 'cancelado': return 'status-cancelled';
      default: return 'status-pending';
    }
  };

  return (
    <div className="reservations-container">
      <h2 className="section-title">Reservas</h2>

      <div className="export-button">
        <CSVLink data={csvData} headers={headers} filename="reservas.csv">
          <button className="btn-export">Exportar a CSV</button>
        </CSVLink>
      </div>

      {loading && <p>Cargando reservas...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && reservations.length === 0 && <p>No hay reservas para mostrar.</p>}

      {!loading && !error && reservations.length > 0 && (
        <div className="responsive-table">
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Cliente</th><th>Fecha</th><th>Hora</th><th>Comensales</th>
                <th>Estado</th><th>Email</th><th>Teléfono</th><th>Peticiones Especiales</th><th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(res => (
                <tr key={res.id}>
                  <td>{res.name}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.guests}</td>
                  <td className={`status ${statusClass(res.status)}`}>{res.status}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <td>{res.specialRequests}</td>
                  <td>
                    <button onClick={() => openEditModal(res)} title="Editar">✏️</button>
                    <button onClick={() => handleDelete(res.id)} title="Eliminar" className="btn-delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingRes && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Editar Reserva</h3>
            <div className="modal-form">
              <input name="name" value={editForm.name} onChange={handleEditChange} placeholder="Nombre" />
              <input type="date" name="date" value={editForm.date} onChange={handleEditChange} />
              <input type="time" name="time" value={editForm.time} onChange={handleEditChange} />
              <input type="number" min="1" name="guests" value={editForm.guests} onChange={handleEditChange} />
              <select name="status" value={editForm.status} onChange={handleEditChange}>
                <option value="sinconfirmar">Sin Confirmar</option>
                <option value="confirmado">Confirmado</option>
                <option value="cancelado">Cancelado</option>
              </select>
              <input name="email" value={editForm.email} onChange={handleEditChange} placeholder="Email" />
              <input name="phone" value={editForm.phone} onChange={handleEditChange} placeholder="Teléfono" />
              <textarea name="specialRequests" value={editForm.specialRequests} onChange={handleEditChange} placeholder="Peticiones especiales" />
            </div>
            <div className="modal-actions">
              <button onClick={handleEditSave} className="btn-save">Guardar</button>
              <button onClick={closeEditModal} className="btn-cancel">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;