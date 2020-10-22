# Assignment 2 - Web Application Development.

Name: Yuting Jing 
Student ID:20086428

## Functionality.
Server:
1)	User registration, authentication and password encrypted
2)	User login. Logout
3)	Add user
4)	Delete user by id
5)	Get all users
6)	Get a user by user id
7)	Get all poems
8)	Get a poem by poem id
9)	Get “my” (the current user) poems (Doesn’t exist in assignment 1. This is the newly added function)
10)	Add a poem
11)	Give a poem a like (In assignment 1, no matter the user has logged in or not, they could give a poem as many likes as they want. In assignment 2, only signed in user can give a thumb up to a poem and they can only give one poem one like)
12)	Cancel the like the user gave to the poem. (In assignment one, user don’t need to login to use this function. In assignment2, they do.)
13)	Delete a poem by poem id
14)	Edit an existing poem (Doesn’t exist in assignment 1. This is a newly added function.)
15)	Get all authors
16)	Get an author by author id
17)	Add an author
18)	Give an author a like (In assignment 1, no matter the user has logged in or not, they could give an author as many likes as they want. In assignment 2, only signed in user can give a thumb up to a poem and they can only give one poem one like)
19)	Cancel the like the user gave to the author. (In assignment one, user don’t need to login to use this function. In assignment2, they do.)
20)	Author can add a work of their own
21)	Author can delete a work of their own

Client:
1)	User registration
2)	User login. Logout
3)	Get all poems
4)	Get “my” (the current user) poems (Doesn’t exist in assignment 1. This is the newly added function)
5)	Add a poem
6)	Give a poem a like (In assignment 1, no matter the user has logged in or not, they could give a poem as many likes as they want. In assignment 2, only signed in user can give a thumb up to a poem and they can only give one poem one like)
7)	Cancel the like the user gave to the poem. (In assignment one, user don’t need to login to use this function. In assignment2, they do.)
8)	Delete a poem by poem id. (Users can only delete poems of their own)
9)	Edit an existing poem (Doesn’t exist in assignment 1. This is a newly added function.)
10)	Get all authors
11)	Give an author a like (in assignment 1, no matter the user has logged in or not, they could give an author as many likes as they want. In assignment 2, only signed in user can give a thumb up to a poem and they can only give one poem one like)
12)	Cancel the like the user gave to the author. (In assignment one, user don’t need to login to use this function. In assignment2, they do.)

Many of the functions cannot be used in client-side because they are administrator functions that cannot be used by registered users.

More information please check Design Document.doc

![][Home]
>>Home has daily recommendation of part of a poem. You can click the link to read the complete poem.

![][LookPoem]
>>After user click the link in the home page, the web will lead user to this page to read the whole version of the poem

![][Authors]
>>All authors shows all authors in the page.

![][AllPoems]
>>All poems shows all the poems in the page.

![][Register]
>>User register in this page. It checks whether the information user enters are valid.

![][Login]
>>User login here. If the User name or passwords don't match, it will have an alter window to tell user to enter the info again.

![][MyPoem]
>>Before user login, the table in this page will be empty. If user doesn't have any poem of his or her own, the table will be empty. 
>>User can add a poem by clicking the button and the web will lead user to another page to enter the info about his or her peom



[Home]: imgs/Home.png
[Authors]:imgs/Authors.png
[AllPoems]:imgs/AllPoems.png
[Register]:imgs/Register.png
[Login]:imgs/Login.png
[MyPoem]:imgs/MyPoem.png
[LookPoem]:imgs/LookPoem.png
