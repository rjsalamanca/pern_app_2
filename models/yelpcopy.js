const db = require('./conn.js');

class yelp {

    static async getAllBusinesses(){
        const query = `SELECT * FROM businesses ORDER BY id`;
        return await getQuery(query);
    }

    static async getOneBusiness(id){
        const query = `SELECT * FROM businesses WHERE id = ${id}`;
        return await getQuery(query);
    }

    static async getOneBusinessReviews(id){
        const query = `
            SELECT B.id, B.business_name, R.review, R.stars
            FROM businesses AS B, reviews AS R 
            WHERE R.business_id = ${id} AND B.id = ${id} ORDER BY B.id;`;
        return await getQuery(query);
    }

    static async getAllBusinessReviews(){
        const query = `
            SELECT B.id, B.business_name, R.review, R.stars
            FROM businesses AS B, reviews AS R 
            WHERE R.business_id = B.id ORDER BY R.id;
        `;

        return await getQuery(query);
    }

    static async getAllReviews(){
        const query = `SELECT * FROM reviews ORDER BY id`;
        return await getQuery(query);
    }

    static async addReview(review,stars,id){
        const query = `INSERT INTO reviews (review, stars, business_id) VALUES ('${review}',${parseInt(stars)},${id})`;
        return await getQuery(query);
    }
}

async function getQuery(query){
    try{
        const response = await db.result(query);
        return response;
    } catch(err){
        return err.message;
    }
}

module.exports = yelp;