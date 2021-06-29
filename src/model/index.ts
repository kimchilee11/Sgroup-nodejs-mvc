import mongoose from "mongoose";
import ArticleModel from "./articles";
import LoginModel from "./login";

export const connection = async function(): Promise<void> {
    try {
        await mongoose.connect('mongodb://localhost:27017/training', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected database");

        await ArticleModel.deleteMany();
        // await LoginModel.deleteMany();
        // await LoginModel.insertMany([
        //     {
        //         email: 'dangphu241299@gmail.com',
        //         password: '123456'
        //     },
        //     {
        //         email: 'kcl@gmail',
        //         password: "hehe"
        //     },
        //     {
        //         email: 'KCL@gmail',
        //         password: "hehe"
        //     }
        // ]);
        await ArticleModel.insertMany([
            {
                id: 1,
                title: 'Covid can quet Da Nang',
                slug: 'Covid-can-quet-Da-Nang',
                urlImg: 'https://res.cloudinary.com/dz6cxtulr/image/upload/v1624904789/yh5m90vztq2wc5ncznqb.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdAt: '2019-05-22T11:41:07.483Z',
            },
            {
                id: 2,
                title: 'Hello',
                slug: 'Hello',
                urlImg: 'https://res.cloudinary.com/dz6cxtulr/image/upload/v1624669597/izowph7fswc4p50dbidd.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdAt: '2020-05-22T11:41:07.483Z',
            },
            {
                id: 3,
                title: 'Chao a fus',
                slug: 'Chao-a-fus',
                urlImg: 'https://res.cloudinary.com/dz6cxtulr/image/upload/v1624932184/acdtsjcwwf7ws3z5w1cf.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 4,
                title: 'How to 4.0 and lay hoc bong',
                slug: 'How-to-4.0-and-lay-hoc-bong',
                urlImg: 'https://res.cloudinary.com/dz6cxtulr/image/upload/v1624704847/gzuq62ywovli67obtok1.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
        ])
    } catch (error) {
        console.log(error);
    }
}
