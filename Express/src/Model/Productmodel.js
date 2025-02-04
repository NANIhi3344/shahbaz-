const {model, Schema}= require('mongoose');

const productSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "Please enter product name!"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description!"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price!"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address!",
        ],
    },
    images: [
        {
            type: String,
            required: [true, "Please enter product images!"],
        }
    ],
    category: {
        type: String,
        required: [true, "Please select category for this product!"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock!"],
        maxLength: [5, "Product stock cannot exceed 5 characters"],
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const productModel = model("Product", productSchema);
module.exports = productModel;