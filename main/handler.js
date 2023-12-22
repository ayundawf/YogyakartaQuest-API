/* eslint-disable no-shadow */
const wisatas = require('./wisata');

// ADD wisata
// const postMethodHandler = (request, h) => {
//   const {
//     name,
//     description,
//     operational,
//     location,
//     price,
//   } = request.payload;

//   const id = name.replace(/\s+/g, '').toLowerCase();
//   const insertedAt = new Date().toISOString();
//   const updatedAt = insertedAt;

//   const wisataNew = {
//     name,
//     description,
//     operational,
//     location,
//     price,
//     insertedAt,
//     updatedAt,
//   };

//   if (name === undefined) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal menambahkan data. Mohon isi nama data',
//     });
//     response.code(400);
//     return response;
//   }

//   wisata.push(wisataNew);

//   const isSuccess = (wisata.filter((wisata) => wisata.id === id).length > 0);

//   if (isSuccess) {
//     const response = h.response({
//       status: 'success',
//       message: 'data berhasil ditambahkan',
//       data: {
//         wisataId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }

//   const response = h.response({
//     status: 'error',
//     message: 'data gagal ditambahkan',
//   });
//   response.code(500);
//   return response;
// };

// GET ALL wisata
const getMethodHandler = (request, h) => {
  const wisataTemp = wisata;
  const { name } = request.query;

  if (name !== undefined) {
    const wisata = wisata.filter(
      (wisata) => wisata.name.toLowerCase().includes(name.toLowerCase()),
    );

    const response = h.response({
      status: 'success',
      data: {
        wisata: wisata.map((wisata) => ({
          id: wisata.id,
          name: wisata.name,
          description: wisata.description,
          operational: wisata.operational,
          location: wisata.location,
          price: wisata.price,
        })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      wisatas: wisataTemp.map((wisata) => ({
        id: wisata.id,
        name: wisata.name,
        description: wisata.description,
        operational: wisata.operational,
        location: wisata.location,
      })),
    },
  });
  response.code(200);
  return response;
};

// GET DETAIL wisata
const getDetailMethodHandler = (request, h) => {
  const { id } = request.params;

  const wisata = wisatas.filter((wisataTemp) => wisataTemp.id === id)[0];
  if (wisata !== undefined) {
    return {
      status: 'success',
      data: {
        wisata,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'data tidak ditemukan',
  });
  response.code(404);
  return response;
};

// EDIT wisata DATA
// const putMethodHandler = (request, h) => {
//   const { id } = request.params;

//   const {
//     name,
//     description,
//     operational,
//     location,
//     price,
//   } = request.payload;

//   if (name === undefined) {
//     const response = h.response({
//       status: 'fail',
//       message: 'Gagal memperbarui data. Mohon isi nama data',
//     });
//     response.code(400);
//     return response;
//   }

//   const updatedAt = new Date().toISOString();
//   const index = wisatas.findIndex((wisata) => wisata.id === id);

//   if (index !== -1) {
//     wisatas[index] = {
//       ...wisatas[index],
//       name,
//       description,
//       operational,
//       location,
//       price,
//       updatedAt,
//     };

//     const response = h.response({
//       status: 'success',
//       message: 'data berhasil diperbarui',
//       data: {
//         wisatas,
//       },
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Gagal memperbarui data. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// DELETE wisata
// const deleteMethodHandler = (request, h) => {
//   const { id } = request.params;

//   const index = wisatas.findIndex((idwisata) => idwisata.id === id);

//   if (index !== -1) {
//     wisatas.splice(index, 1);
//     const response = h.response({
//       status: 'success',
//       message: 'data berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'data gagal dihapus. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

module.exports = {
  // postMethodHandler,
  getMethodHandler,
  getDetailMethodHandler,
  // putMethodHandler,
  // deleteMethodHandler,
};