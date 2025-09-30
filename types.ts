
export enum UserRole {
    Admin = 'Administrador',
    Doctor = 'Médico',
    Nurse = 'Enfermeiro(a)',
    Pharmacist = 'Farmacêutico(a)',
    Visitor = 'Visitante'
}

export interface User {
    id: string;
    name: string;
    role: UserRole;
}

export interface Medication {
    id: string;
    name: string;
    manufacturer: string;
    dosage: string;
    form: 'Tablet' | 'Capsule' | 'Liquid' | 'Injection';
}

export interface MedicationStock extends Medication {
    stockId: string;
    lotNumber: string;
    expiryDate: string;
    quantity: number;
}

export interface Patient {
    id: string;
    name: string;
    room: string;
    allergies: string[];
}

export enum PrescriptionStatus {
    Pending = 'Pendente',
    Dispensed = 'Dispensado',
    Administered = 'Administrado',
    Cancelled = 'Cancelado'
}

export interface Prescription {
    id: string;
    patientId: string;
    medicationId: string;
    dosage: string;
    instructions: string;
    prescribedById: string; // Doctor's ID
    prescribedAt: string;
    status: PrescriptionStatus;
}

export interface AdministrationLog {
    id: string;
    prescriptionId: string;
    patientId: string;
    administeredById: string; // Nurse's ID
    administeredAt: string;
    notes?: string;
}

export interface AuditLog {
    id: string;
    timestamp: string;
    userId: string;
    userName: string;
    userRole: UserRole;
    action: string;
    details: string;
}
