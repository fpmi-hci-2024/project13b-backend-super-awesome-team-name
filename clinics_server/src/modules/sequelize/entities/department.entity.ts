import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
    tableName: 'department',
})
export class DepartmentEntity extends Model {
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
        type: DataType.INTEGER,
        allowNull: false,
    })
    clinicId: number;
}