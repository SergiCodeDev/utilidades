import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route(':category', 'routes/category.tsx'),
    route(':category/:utility', 'routes/utility.tsx'),
    route('*', 'routes/not-found.tsx'), // 404 global
  ]),
] satisfies RouteConfig
