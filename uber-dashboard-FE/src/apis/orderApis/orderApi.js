import { api } from "../configs/axiosConfigs";



export const RestaurentsApi = {

    // create: async function (product, cancel = false) {
    //     const abortController = new AbortController();
    //     const signal = cancel ? abortController.signal : undefined;
      
    //     try {
    //       await api.request({
    //         url: `/auth/register`,
    //         method: "POST",
    //         data: product,
    //         signal,
    //       });
    //     } catch (error) {
    //       if (cancel && error.name !== 'AbortError') {
    //         abortController.abort();
    //       }
    //       throw error;
    //     }
    //   },
      

    //   get: async function (product, cancel = false) {
    //     const abortController = new AbortController();
    //     const signal = cancel ? abortController.signal : undefined;
      
    //     try {
    //       await api.request({
    //         url: `/auth/register`,
    //         method: "POST",
    //         data: product,
    //         signal,
    //       });
    //   return response.data.products;
    //     } catch (error) {
    //       if (cancel && error.name !== 'AbortError') {
    //         abortController.abort();
    //       }
    //       throw error;
    //     }
    //   },
      

       getAllOrder : async function (cancel = false) {
        const abortController = new AbortController();
        const signal = cancel ? abortController.signal : undefined;
      
        try {
         const response =  await api.request({
            url: `/orders`,
            method: "GET",
            signal,
          });
         return response.data.orders;
        } catch (error) {
          if (cancel && error.name !== 'AbortError') {
            abortController.abort();
          }
          throw error;
        }
      },


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
