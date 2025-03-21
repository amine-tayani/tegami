/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AndroidImport } from './routes/android'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const AndroidRoute = AndroidImport.update({
  id: '/android',
  path: '/android',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/android': {
      id: '/android'
      path: '/android'
      fullPath: '/android'
      preLoaderRoute: typeof AndroidImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/android': typeof AndroidRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/android': typeof AndroidRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/android': typeof AndroidRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/android'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/android'
  id: '__root__' | '/' | '/android'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AndroidRoute: typeof AndroidRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AndroidRoute: AndroidRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/android"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/android": {
      "filePath": "android.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
