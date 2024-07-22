# Chọn hình ảnh Node.js chính thức
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Expose port 8080 (hoặc cổng mà bạn dự định sử dụng)
EXPOSE 8080

# Chạy ứng dụng
CMD ["npm", "start"]
