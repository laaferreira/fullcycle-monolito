import {
  Column,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'order_clients',
  timestamps: false
})
export class ClientModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare name: string

  @Column({ allowNull: true })
  declare email: string

  @Column({ allowNull: true })
  declare document: string

  @Column({ allowNull: true })
  declare address: string
}
