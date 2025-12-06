import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Properties API
export const propertyAPI = {
    getAll: (params) => api.get('/properties', { params }),
    getFeatured: () => api.get('/properties/featured'),
    getById: (id) => api.get(`/properties/${id}`),
    create: (data) => api.post('/properties', data),
    update: (id, data) => api.put(`/properties/${id}`, data),
    delete: (id) => api.delete(`/properties/${id}`)
};

// Bookings API
export const bookingAPI = {
    create: (data) => api.post('/bookings', data),
    getAll: (params) => api.get('/bookings', { params }),
    getById: (id) => api.get(`/bookings/${id}`),
    updateStatus: (id, status) => api.put(`/bookings/${id}`, { status })
};

// Contact API
export const contactAPI = {
    submit: (data) => api.post('/contact', data),
    getAll: (params) => api.get('/contact', { params }),
    updateStatus: (id, status) => api.put(`/contact/${id}`, { status })
};

export default api;
