import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
    tableName: 'doctor',
})
export class DoctorEntity extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    graduation: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    specialty: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    departmentId: number;
}