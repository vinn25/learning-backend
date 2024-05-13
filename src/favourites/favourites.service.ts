import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { favourite } from './schema/favourites.schema';
import { Model } from 'mongoose';
import { Movie } from 'src/movies/schema/movie.schema';

@Injectable()
export class FavouritesService {
    constructor(@InjectModel(favourite.name) private favouriteModel: Model<favourite>,
        @InjectModel(Movie.name) private movieModel: Model<Movie>) { }

    getAllFavourites() {
        return this.favouriteModel.find().populate('movie');
    }

    getFavourite(id: string) {
        return this.favouriteModel.findById(id).populate('movie');
    }

    async createFavourite({ movie, ...createFavouriteDto }: CreateFavouriteDto) {
        if (movie) {
            const newMovie = new this.movieModel(movie);
            const createNewMovie = await newMovie.save();
            const newFavourite = new this.favouriteModel({
                ...createFavouriteDto,
                movie: createNewMovie._id,
            });
            return (await newFavourite.save()).populate('movie');
        }

        const newFavourite = new this.favouriteModel(createFavouriteDto);
        return newFavourite.save();
    }

    updateFavourite(id: string, updateFavouriteDto: UpdateFavouriteDto) {
        const updated = this.favouriteModel.findByIdAndUpdate(id, updateFavouriteDto);
        return updated;
    }

    deleteFavourite(id: string) {
        const delFav = this.favouriteModel.findByIdAndDelete(id);
        return delFav;
    }
}