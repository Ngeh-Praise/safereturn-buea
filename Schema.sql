-- Create the Database
CREATE DATABASE IF NOT EXISTS SafeReturnBuea;
USE SafeReturnBuea;

-- User Table
CREATE TABLE USER (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Role ENUM('admin', 'user') DEFAULT 'user',
    FullName VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20)
);

-- Missing Person Report Table
CREATE TABLE MissingPersons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reporter_id INT,
    full_name VARCHAR(255) NOT NULL,
    age INT,
    gender VARCHAR(10),
    photo_url VARCHAR(255),
    description TEXT,
    last_seen_location_id INT,
    missing_date DATETIME NOT NULL,
    status ENUM('active', 'found', 'archived') DEFAULT 'active',
    approved TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES USER(UserID)
);

-- Community Tips Table
CREATE TABLE COMMUNITY_MEMBER_TIP (
    TipID INT AUTO_INCREMENT PRIMARY KEY,
    ReportID INT,
    UserID INT,
    Details TEXT,
    LocationSighted VARCHAR(255),
    DateTimeSighted DATETIME,
    Status VARCHAR(50) DEFAULT 'pending',
    Reporter_Contact_Info VARCHAR(255),
    FOREIGN KEY (ReportID) REFERENCES MissingPersons(id),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);

-- SMS Logs Table
CREATE TABLE SMS_LOG (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    ReportID INT,
    RecipientPhone VARCHAR(20),
    MessageBody TEXT,
    SentDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status VARCHAR(50),
    FOREIGN KEY (ReportID) REFERENCES MissingPersons(id)
);