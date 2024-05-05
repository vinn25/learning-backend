import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FavouritesService } from './favourites.service';

@Controller('favourites')
export class FavouritesController {
    constructor(private favouriteService: FavouritesService) { }

    @Get()
    getAllFavourites(@Query('membership') membership?: 'FREE' | 'VIP') {
        return this.favouriteService.getAllFavourites(membership)
    }

    @Get(':id')
    getFavourite(@Param('id') id: string) {
        return this.favouriteService.getFavourite(+id)
    }

    @Post()
    createFavourite(@Body() userFavourites: { name: string, fmovie: string, factor: string, membership: "FREE" | "VIP" }) {
        return this.favouriteService.createFavourite(userFavourites)
    }

    @Patch(':id')
    updateFavourite(@Param('id') id: string, @Body() favouriteUpdate: { name?: string, fmovie?: string, factor?: string, membership?: "FREE" | "VIP" }) {
        return this.favouriteService.updateFavourite(+id, favouriteUpdate)
    }

    @Delete(':id')
    deleteFavourite(@Param('id') id: string) {
        return this.favouriteService.deleteFavourite(+id)
    }
}
