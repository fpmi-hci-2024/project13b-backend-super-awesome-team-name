import {Column, DataType, Model, Table} from "sequelize-typescript";
import {AppointmentsService} from "../../appointment/appointments.service";

@Table({
    tableName: 'appointment',
})
export class AppointmentEntity extends Model<AppointmentEntity> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    doctorId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    date: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    time: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    patientName: string;
}