import { Hono } from 'hono';


const app = new Hono();

app.post('/api/v1/signup', (c) => {
	return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.get("/api/v1/products",(c) => {
  return c.text("route  to get all the products")
})

app.get('/api/v1/products/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get certain product route')
})

export default app;
