import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Controller('favourites')
export class FavouritesController {
    constructor(private favouriteService: FavouritesService) { }

    @Get()
    getAllFavourites(@Query('membership') membership?: 'VIP' | 'FREE') {
        return this.favouriteService.getAllFavourites(membership)
    }

    @Get(':id')
    getFavourite(@Param('id', ParseIntPipe) id: number) {
        return this.favouriteService.getFavourite(id)
    }

    @Post()
    createFavourite(@Body(ValidationPipe) createFavouriteDto: CreateFavouriteDto) {
        return this.favouriteService.createFavourite(createFavouriteDto)
    }

    @Patch(':id')
    updateFavourite(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateFavouriteDto: UpdateFavouriteDto) {
        return this.favouriteService.updateFavourite(id, updateFavouriteDto)
    }

    @Delete(':id')
    deleteFavourite(@Param('id', ParseIntPipe) id: number) {
        return this.favouriteService.deleteFavourite(id)
    }
}