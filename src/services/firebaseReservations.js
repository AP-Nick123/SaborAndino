import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  Timestamp
} from "firebase/firestore";
import { db } from "../context/AuthContext";

const RESERVATIONS_COLLECTION = "reservations";

export const getReservations = async () => {
  try {
    const snapshot = await getDocs(collection(db, RESERVATIONS_COLLECTION));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    throw new Error("No se pudo obtener las reservas");
  }
};

export const addReservation = async (reservation) => {
  try {
    if (!reservation || typeof reservation !== "object") {
      throw new Error("Datos inválidos para crear reserva");
    }

    if (!reservation.name || !reservation.date) {
      throw new Error("Faltan campos obligatorios: name o date");
    }

    const reservationDate = reservation.date instanceof Date
      ? Timestamp.fromDate(reservation.date)
      : Timestamp.fromDate(new Date(reservation.date));

    const docRef = await addDoc(collection(db, RESERVATIONS_COLLECTION), {
      ...reservation,
      date: reservationDate,
      status: "pendiente",
      createdAt: Timestamp.now(),
    });

    return { id: docRef.id, ...reservation };
  } catch (error) {
    console.error("Error al agregar reserva:", error);
    throw error;
  }
};

export const updateReservationStatus = async (id, status) => {
  try {
    const validStatuses = ["pendiente", "confirmado", "cancelado"];
    if (!id || !validStatuses.includes(status)) {
      throw new Error("ID o status inválido");
    }

    const resRef = doc(db, RESERVATIONS_COLLECTION, id);
    await updateDoc(resRef, { status });
  } catch (error) {
    console.error("Error al actualizar estado de reserva:", error);
    throw error;
  }
};

export const deleteReservation = async (id) => {
  try {
    if (!id) throw new Error("ID inválido");
    await deleteDoc(doc(db, RESERVATIONS_COLLECTION, id));
  } catch (error) {
    console.error("Error al eliminar reserva:", error);
    throw error;
  }
};

export const updateReservation = async (id, updatedData) => {
  try {
    if (!id || !updatedData || typeof updatedData !== "object") {
      throw new Error("ID o datos inválidos para actualizar");
    }

    const cleanData = {};
    for (const [key, value] of Object.entries(updatedData)) {
      if (value !== undefined && typeof value !== "function" && value !== null) {
        if (key === "date" && !(value instanceof Timestamp)) {
          cleanData[key] = Timestamp.fromDate(new Date(value));
        } else {
          cleanData[key] = value;
        }
      }
    }

    if (Object.keys(cleanData).length === 0) {
      throw new Error("No hay datos válidos para actualizar");
    }

    const ref = doc(db, RESERVATIONS_COLLECTION, id);
    await updateDoc(ref, cleanData);
  } catch (error) {
    console.error("Error al actualizar reserva:", error);
    throw error;
  }
};