import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Injectable()
export class FavouritesService {
    private favourites = [
        {
            "id": 1,
            "name": "Justine Zhang",
            "fmovie": "Crimson Cascade",
            "factor": "Tom Cruise",
            "membership": "FREE"
        },
        {
            "id": 2,
            "name": "Mohammed Andersen",
            "fmovie": "Echoes of Eternity",
            "factor": "James Cameron",
            "membership": "VIP"
        },
        {
            "id": 3,
            "name": "Karin Stevens",
            "fmovie": "Titan's Tundra",
            "factor": "Jason Statham",
            "membership": "VIP"
        },
        {
            "id": 4,
            "name": "Ora Collins",
            "fmovie": "Midnight Mirage",
            "factor": "Robin Williams",
            "membership": "FREE"
        },
        {
            "id": 5,
            "name": "Laurel Anthony",
            "fmovie": "Shadows in the Wind",
            "factor": "Bruce Willis",
            "membership": "FREE"
        }
    ]

    getAllFavourites(membership?: 'VIP' | 'FREE') {
        if (membership) {
            const membershipsArray = this.favourites.filter(favourite => favourite.membership === membership)
            if (!membershipsArray.length) throw new NotFoundException("User Membership Not Found")
            return membershipsArray
        }

        return this.favourites
    }

    getFavourite(id: number) {
        const favourite = this.favourites.find(favourite => favourite.id === id)

        if (!favourite) throw new NotFoundException("Favourite Not Found")

        return favourite
    }

    createFavourite(createFavouriteDto: CreateFavouriteDto) {
        const sortByHighestId = [...this.favourites].sort((a, b) => b.id - a.id)
        const newFavourite = {
            id: sortByHighestId[0].id + 1,
            ...createFavouriteDto
        }
        this.favourites.push(newFavourite)
        return newFavourite
    }

    updateFavourite(id: number, updateFavouriteDto: UpdateFavouriteDto) {
        this.favourites = this.favourites.map(favourite => {
            if (favourite.id === id) {
                return { ...favourite, ...updateFavouriteDto }
            }
            return favourite
        })
        return this.getFavourite(id)
    }

    deleteFavourite(id: number) {
        const removedFavourite = this.getFavourite(id)

        this.favourites = this.favourites.filter(favourite => favourite.id !== id)

        return removedFavourite
    }
}