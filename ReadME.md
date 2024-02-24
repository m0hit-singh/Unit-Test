#Setup react with vite
install react react-dom vite @vitejs/plugin-react-swc
create vite.config.ts file with defineConfig with plugin react()


#Setup Redux

install react-redux @reduxjs/toolkit

create store using configurestore and wrapped in Provider from react-redux


#Setup Unit Testing

Create test folder and create files with .spec.jsx/tsx

install -D jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

#run below command to create jest.config.js file 
npm ts-jest config:init
