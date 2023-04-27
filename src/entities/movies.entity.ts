import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null | undefined;

  @Column({ type: 'integer' })
  duration: number;

  @Column({ type: 'integer' })
  price: number;
}

export { Movie };

//  Comando para gerar migration e update Bd
// npm run typeorm migration:generate -- -d src/data-source src/migrations/createMoviesTable
// npm run typeorm migration:run -- -d src/data-source
