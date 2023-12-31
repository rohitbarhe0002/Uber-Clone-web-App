import { api } from "../configs/axiosConfigs";

export const AuthApi  = {

       SignUp : async function (userData, cancel = false) {
        console.log(userData,"users data from API controller")
        const abortController = new AbortController();
        const signal = cancel ? abortController.signal : undefined;
      
        try {
      const response =  await api.request({
            url: `/auth/signup`,
            method: "POST",
            data:userData,
            signal,
          });
         return response.data;
        } catch (error) {
          if (cancel && error.name !== 'AbortError') {
            abortController.abort();
          }
          throw error;
        }
      },
      

      SignIn : async function (userData, cancel = false) {
        const abortController = new AbortController();
        const signal = cancel ? abortController.signal : undefined;
      
        try {
      const response =  await api.request({
            url: `/auth/signin`,
            method: "POST",
            data:userData,
            signal,
          });
         return response.data;
        } catch (error) {
          if (cancel && error.name !== 'AbortError') {
            abortController.abort();
          }
          throw error;
        }
      },

      // getAllRestaurentMenu : async function (cancel = false) {
      //   const abortController = new AbortController();
      //   const signal = cancel ? abortController.signal : undefined;
      
      //   try {
      //    const response =  await api.request({
      //       url: `/restaurent`,
      //       method: "GET",
      //       signal,
      //     });
      //    return response.data.products;
      //   } catch (error) {
      //     if (cancel && error.name !== 'AbortError') {
      //       abortController.abort();
      //     }
      //     throw error;
      //   }
      // },


//   get: async function (id, cancel = false) {
//     const abortController = new AbortController();
//     const signal = cancel ? abortController.signal : undefined;

//     try {
//       const response = await api.request({
//         url: `/products/:id`,
//         method: "GET",
//         signal,
//       });

//       return response.data.product;
//     } catch (error) {
//       if (error.name === 'AbortError') {
//         // Request was aborted
//         return null;
//       }
//       throw error;
//     } finally {
//       if (cancel) {
//         abortController.abort();
//       }
//     }
//   },
//   getAll: async function (cancel = false) {
//     const abortController = new AbortController();
//     const signal = cancel ? abortController.signal : undefined;

//     try {
//       const response = await api.request({
//         url: "/products/",
//         method: "GET",
//         signal,
//       });

//       return response.data.products;
//     } catch (error) {
//       if (error.name === 'AbortError') {
//         // Request was aborted
//         return [];
//       }
//       throw error;
//     } finally {
//       if (cancel) {
//         abortController.abort();
//       }
//     }
//   },
//   search: async function (name, cancel = false) {
//     const abortController = new AbortController();
//     const signal = cancel ? abortController.signal : undefined;

//     try {
//       const response = await api.request({
//         url: "/products/search",
//         method: "GET",
//         params: {
//           name: name,
//         },
//         signal,
//       });

//       return response.data.products;
//     } catch (error) {
//       if (error.name === 'AbortError') {
//         // Request was aborted
//         return [];
//       }
//       throw error;
//     } finally {
//       if (cancel) {
//         abortController.abort();
//       }
//     }
//   },
  
};
