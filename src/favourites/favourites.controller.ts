import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';
import mongoose from 'mongoose';

@Controller('favourites')
export class FavouritesController {
    constructor(private favouriteService: FavouritesService) { }

    @Get()
    getAllFavourites() {
        return this.favouriteService.getAllFavourites();
    }

    @Get(':id')
    async getFavourite(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Favourite Not Found', 404);

        const findFavourite = await this.favouriteService.getFavourite(id);
        if (!findFavourite) throw new HttpException('Favourite Not Found', 404);
        return findFavourite;
    }

    @Post()
    createFavourite(@Body(ValidationPipe) createFavouriteDto: CreateFavouriteDto) {
        console.log(createFavouriteDto)
        return this.favouriteService.createFavourite(createFavouriteDto)
    }

    @Patch(':id')
    updateFavourite(@Param('id') id: string, @Body(ValidationPipe) updateFavouriteDto: UpdateFavouriteDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Favourite Not Found', 404);

        const update = this.favouriteService.updateFavourite(id, updateFavouriteDto)
        return update;
    }

    @Delete(':id')
    async deleteFavourite(@Param('id') id: string) {
        const delFav = await this.favouriteService.deleteFavourite(id)
        return delFav;
    }
}