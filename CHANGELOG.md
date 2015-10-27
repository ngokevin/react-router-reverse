## 1.0.0 (2015-10-27)

react-router 1.0.0rc-3 support.

- ```<ReverseLink>``` can accept ```routes``` via both props or context.
- Fixed reverse algorithm to concatenate routes using ```url-join``` now that
react-router discerns between relative and absolute paths in nested routes.
