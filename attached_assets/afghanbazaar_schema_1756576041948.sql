
-- AfghanBazaar Marketplace Database Schema

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(100),
    national_id VARCHAR(50) UNIQUE,
    verification_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Listings table
CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    location VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active'
);

-- Listing Images
CREATE TABLE listing_images (
    id SERIAL PRIMARY KEY,
    listing_id INT REFERENCES listings(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL
);

-- Messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(id) ON DELETE CASCADE,
    receiver_id INT REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Favorites table
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    listing_id INT REFERENCES listings(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reports table
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    listing_id INT REFERENCES listings(id) ON DELETE CASCADE,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admins table
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'moderator',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
