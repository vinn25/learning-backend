import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schema/movie.schema';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) { }

    findAll() {
        return this.movieModel.find()
    }

    findById(id: string) {
        return this.movieModel.findById(id);
    }

    createMovie(createMovieDto: CreateMovieDto) {
        const newMovie = new this.movieModel(createMovieDto);
        return newMovie.save();
    }

    updateMovie(id: string, updateMovieDto: UpdateMovieDto) {
        const upt = this.movieModel.findByIdAndUpdate(id, updateMovieDto);
        return upt;
    }

    deleteMovie(id: string) {
        const deleteOne = this.movieModel.findById(id);
        const delMov = deleteOne.deleteOne();
        return delMov;
    }
}
