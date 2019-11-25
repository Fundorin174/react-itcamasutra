    
    let store = {
    
    _callSubscriber(){},
    
    _state: {

        navBar:{
            frends: [
                {id: '1', name: 'Alex'},
                {id: '2', name: 'Dima'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Lyudmila'},
                {id: '5', name: 'Boris'},
                {id: '6', name: 'Vasja'}
    
            ]
    
        },
    
        profilePage: {
            posts: [
            {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', numOfLikes: '5'},
            {id: '2', msg: 'Fuck', numOfLikes: '500'},
            {id: '3', msg: 'Ахахахахахахах', numOfLikes: '50'},
            {id: '4', msg: 'Ахахахаха', numOfLikes: '100'},
            {id: '5', msg: 'Получилось!!!', numOfLikes: '1000'}
          ],
    
        newPostText: ''
        },
    
        dialogPage: {
            dialogs: [
                {id: '1', name: 'Alex', date: 'June, 25, 2019', avaSrc: './../../../../img/usersAvatars/alex.jpg'},
                {id: '2', name: 'Dima', date: 'June, 24, 2019', avaSrc: './../../../../img/usersAvatars/dima.jpg'},
                {id: '3', name: 'Sveta', date: 'June, 23, 2019', avaSrc: './../../../../img/usersAvatars/sveta.jpg'},
                {id: '4', name: 'Lyudmila', date: 'May, 24, 2019', avaSrc: './../../../../img/usersAvatars/lyudmila.jpg'},
                {id: '5', name: 'Dmitry', date: 'June, 24, 2018', avaSrc: './../../../../img/usersAvatars/dmitry.jpg'},
                {id: '6', name: 'Boris', date: 'June, 04, 2017', avaSrc: './../../../../img/usersAvatars/boris.jpg'}
                ],
        
            messages: [
                {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Alex', date: 'June, 25, 2019'},
                {id: '2', msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Dima', date: 'June, 24, 2019'},
                {id: '3', msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Sveta', date: 'June, 23, 2019'},
                {id: '4', msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Viktor', date: 'June, 24, 2018'},
                {id: '5', msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Valera', date: 'June, 04, 2017'}
            ],
    
            newMsgText: ''
        }
    
      
    },

    getState() {
        return this._state;
    },

    adPost(someNewPost) {
    let newItem = {
        id: (`${this._state.profilePage.posts.length+1}`),
        msg: someNewPost, 
        numOfLikes: '0'
    };
    
    this._state.profilePage.posts.push(newItem);
    this._callSubscriber(this._state);
    this._state.profilePage.newPostText ='';

    },

    changeNewPostText(newAddedPost) {
    this._state.profilePage.newPostText = newAddedPost;
    this._callSubscriber(this._state);
    },

    adMsg(someNewMsg) {
         let newItem = {
            id: (`${this._state.dialogPage.messages.length+1}`),
            msg: someNewMsg, 
            name: 'Я',
            date: 'Только что'
        };
    
        this._state.dialogPage.messages.push(newItem);
    this._callSubscriber(this._state);
    this._state.dialogPage.newMsgText='';

    },

    changeNewMsgText(newAddedMsg) {
        this._state.dialogPage.newMsgText = newAddedMsg;
   this._callSubscriber(this._state);
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    }





}

export default store;
window.store = store;

// let state = {

//     navBar:{
//         frends: [
//             {id: '1', name: 'Alex'},
//             {id: '2', name: 'Dima'},
//             {id: '3', name: 'Sveta'},
//             {id: '4', name: 'Lyudmila'},
//             {id: '5', name: 'Boris'},
//             {id: '6', name: 'Vasja'}

//         ]

//     },

//     profilePage: {
//         posts: [
//         {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', numOfLikes: '5'},
//         {id: '2', msg: 'Fuck', numOfLikes: '500'},
//         {id: '3', msg: 'Ахахахахахахах', numOfLikes: '50'},
//         {id: '4', msg: 'Ахахахаха', numOfLikes: '100'},
//         {id: '5', msg: 'Получилось!!!', numOfLikes: '1000'}
//       ],

//     newPostText: ''
//     },

//     dialogPage: {
//         dialogs: [
//             {id: '1', name: 'Alex', date: 'June, 25, 2019', avaSrc: './../../../../img/usersAvatars/alex.jpg'},
//             {id: '2', name: 'Dima', date: 'June, 24, 2019', avaSrc: './../../../../img/usersAvatars/dima.jpg'},
//             {id: '3', name: 'Sveta', date: 'June, 23, 2019', avaSrc: './../../../../img/usersAvatars/sveta.jpg'},
//             {id: '4', name: 'Lyudmila', date: 'May, 24, 2019', avaSrc: './../../../../img/usersAvatars/lyudmila.jpg'},
//             {id: '5', name: 'Dmitry', date: 'June, 24, 2018', avaSrc: './../../../../img/usersAvatars/dmitry.jpg'},
//             {id: '6', name: 'Boris', date: 'June, 04, 2017', avaSrc: './../../../../img/usersAvatars/boris.jpg'}
//             ],
    
//         messages: [
//             {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Alex', date: 'June, 25, 2019'},
//             {id: '2', msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Dima', date: 'June, 24, 2019'},
//             {id: '3', msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Sveta', date: 'June, 23, 2019'},
//             {id: '4', msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Viktor', date: 'June, 24, 2018'},
//             {id: '5', msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Valera', date: 'June, 04, 2017'}
//         ],

//         newMsgText: ''
//     }

  
// };


// export const adPost = (someNewPost) => {

//     let newItem = {
//         id: (`${state.profilePage.posts.length+1}`),
//         msg: someNewPost, 
//         numOfLikes: '0'
//     };
    
//     state.profilePage.posts.push(newItem);
//     renderEntireTree(state);
//     state.profilePage.newPostText ='';

// };


// export const changeNewPostText = (newAddedPost) => {

//     state.profilePage.newPostText = newAddedPost;
//     renderEntireTree(state);
// };

// export const adMsg = (someNewMsg) => {

//     let newItem = {
//         id: (`${state.dialogPage.messages.length+1}`),
//         msg: someNewMsg, 
//         name: 'Я',
//         date: 'Только что'
//     };
    
//     state.dialogPage.messages.push(newItem);
//     renderEntireTree(state);
//     state.dialogPage.newMsgText='';

// }

// export const changeNewMsgText = (newAddedMsg) => {

//     state.dialogPage.newMsgText = newAddedMsg;
//     renderEntireTree(state);
// };


// export const subscribe = (observer) => {
//     renderEntireTree = observer;
// }

// export default state;