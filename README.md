# laravel-vue-image-upload-app
laravel-vue-image-upload-app

# Laravel + Vue Image Upload App

This is a simple full-stack Laravel and Vue.js application with token-based authentication and secure image upload functionality.

## 🔐 Features

- Token-based authentication using Laravel Sanctum or Passport
- User registration and login
- Secure image uploads to `storage/app/public`
- Each user can view only their own uploaded images
- Users can delete or copy the link of their uploaded photos
- Vue.js frontend with Axios for API interaction

## 📁 Folder Structure

- `laravel/` - Laravel backend (API, auth, storage)
- `vue/` - Vue.js frontend (auth pages, My Images view)

## 🚀 Installation Guide

### Backend (Laravel)

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
php artisan serve
