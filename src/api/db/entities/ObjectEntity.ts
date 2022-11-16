import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('object')
class ObjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  photo: string;

  @Column({type:'varchar', nullable:true})
  description: string;

  @Column({type:'varchar', length: 100})
  shortDescription: string;

  @Column('datetime')
  createdAt: Date;

}

export default ObjectEntity;
