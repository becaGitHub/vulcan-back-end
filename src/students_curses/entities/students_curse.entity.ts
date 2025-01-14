import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Curse } from '../../curses/entities/curse.entity';

@Entity('students_curses')
export class StudentsCurse {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Curse)
  @JoinColumn({ name: 'curse_id' })
  curse!: Curse;  // Añadido "!" para marcar como definitivamente asignada

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student!: Student;  // Añadido "!" para marcar como definitivamente asignada

  @Column({ default: false })
  deleted: boolean = false;  // Valor predeterminado para deleted

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_entered: Date = new Date();  // Valor predeterminado para date_entered

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  date_modified: Date | null = null; // Valor predeterminado para date_modified
}
