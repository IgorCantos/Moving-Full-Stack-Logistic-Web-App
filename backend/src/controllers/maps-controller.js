const axios = require('axios');

let mapsController = {

    getDistanceAndTimeBetweenTwoPoints: async (req, res) => {
        const { originAddress, destinyAddress } = req.body;

        try {
            await axios({
                method: 'GET',
                url: `https://maps.googleapis.com/maps/api/directions/json?origin=${originAddress}&destination=${destinyAddress}&key=AIzaSyBo7OKEy-HHKQh9PrP7fYB0PGz2oIRA6UQ`
            })
                .then(response => res.json({ distance: response.data.routes[0].legs[0].distance.text, time: response.data.routes[0].legs[0].duration.text }))
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    mapsController
}