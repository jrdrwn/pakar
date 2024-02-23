-- CreateTable
CREATE TABLE `karya` (
    `karya_id` INTEGER NOT NULL AUTO_INCREMENT,
    `about` TEXT NULL,
    `specification` TEXT NULL,
    `title` LONGTEXT NOT NULL,
    `image` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `main_category` VARCHAR(191) NOT NULL,
    `sub_category` VARCHAR(191) NULL,
    `side_category` VARCHAR(191) NULL,
    `author` INTEGER NOT NULL,

    INDEX `Karya_author_fkey`(`author`),
    PRIMARY KEY (`karya_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NULL,
    `middle_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `karya` ADD CONSTRAINT `Karya_author_fkey` FOREIGN KEY (`author`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
