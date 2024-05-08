import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import mongoose from 'mongoose';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    findAll() {
        return this.moviesService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Movie Not Found', 404);

        const findMovie = await this.moviesService.findById(id);
        if (!findMovie) throw new HttpException('Movie Not Found', 404);
        return findMovie;
    }

    @Post()
    createMovie(@Body(ValidationPipe) createMovieDto: CreateMovieDto) {
        console.log(createMovieDto);
        return this.moviesService.createMovie(createMovieDto);
    }

    @Patch(':id')
    updateMovie(@Param('id') id: string, @Body(ValidationPipe) updateMovieDto: UpdateMovieDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Movie Not Found', 404);

        const upt = this.moviesService.updateMovie(id, updateMovieDto);
        return upt;
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: string) {
        const delMov = await this.moviesService.deleteMovie(id);
        return delMov;
    }
}
