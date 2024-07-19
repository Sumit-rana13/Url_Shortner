# URL Shortener Using Node.js, Express, and MongoDB

## Overview
This project is a URL shortener application built with Node.js, Express, and MongoDB. It allows users to generate shortened URLs that redirect to the original links. 
The application features URL shortening, redirection, visit tracking, and a user-friendly interface.

## Features
**URL Shortening**: Convert long URLs into short, easily shareable links.<br>
**Redirection**: Redirect users to the original URL when the short link is accessed.<br>
**Analytics**: Track the number of visits to each short URL.<br>
**Persistent Storage**: Store URL mappings and visit history in a MongoDB database.<br>
**User Interface**: Simple, user-friendly interface for creating and managing short URLs.<br>

## Technologies Used
**Node.js**: Server-side JavaScript runtime.<br>
**Express**: Web framework for Node.js.<br>
**MongoDB**: NoSQL database for storing URL mappings and visit history.<br>
**EJS**: Templating engine for server-side rendering.<br>
**Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.<br>


## Usage

### 1. Create a Short URL:
Enter a long URL in the input field on the homepage. <br>
Click the "Shorten" button to generate a short URL.

### 2. Access the Original URL:
Use the generated short URL to be redirected to the original URL.

