export default {

    view: (_id) => {
        return fetch('/user/').then(res => res.json()).then(data => {
            // gives all users, extract from them all expect mine
            // data is an array
            const otherUser = data.filter(d => d._id !== _id)

            return otherUser
        })
    },
    allFavMovies: (_id) => {

        return fetch(`/user/movies/${_id}`)
            .then(res => res.json())
            .then(data => {
                // data.favourites gives array of all the fav movies
                const list = data.favourites

                return list

            })
    }

}