
# WebApp

Aplicació web de missatgeria online instantania.
La webapp esta construida amb Node.js i Socket.io dins de contenidors Docker. 

## Estructura Contenidors


**Client:** Node.js, Express, Nodemon, Socket.io-Cli, 

**Server:** Node.js, Express, Nodemon, Socket.io, mysql, CookieParser, ExpressSession


## Pre-Requisits

Es necessari tenir instal·lat docker i python per el correcte funcionament de la contrucció dels contenidors.

```bash
  sudo apt install docker python
  git clone https://github.com/ByPalacios/WebXat.git
```

## Instal·lació

Es necessari tenir instal·lat docker i python per el correcte funcionament de la contrucció dels contenidors.

### For Windows:
```bash
  cd WebXat
  python run.py
```

### For Linux & macOS (UNIX):
```bash
  cd WebXat
  python run-linux.py
```

