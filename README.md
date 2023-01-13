# 3D-Printer


## Intall Octoprint
```bash
pip install --user OctoPrint==1.7.0
```
## How to use download OctoPrint

At first we need to clone the OctoPrint https://github.com/OctoPrint/OctoPrint

We need to run the setup.py from the cloned repo.

```bash
python setup.py bdist_wheel
```

After that we need to pip install from the OctoPrint-1.8.6-py2.py3-none-any.whl

```bash
pip install --user dist\OctoPrint-1.8.6-py2.py3-none-any.whl
```

## How to start the OctoPrint server

Start the server
```bash
python -m octoprint serve
```

Go to the URL in brower
```bash
http://localhost:5000/
```
[Template](https://demo.templatemonster.com/demo/52524.html?_gl=1*11nxqsp*_ga*MjA2MzY2NjQ4My4xNjczNDI4MTUx*_ga_FTPYEGT5LY*MTY3MzQyODE1MC4xLjAuMTY3MzQyODE1MC42MC4wLjA.&_ga=2.21920059.1038690767.1673428151-2063666483.1673428151)

[Colour for the website](https://getbootstrap.com/docs/5.3/customize/color/)

Theme Color:

![#3f7fa1](https://placehold.co/15x15/3f7fa1/3f7fa1.png) `#3f7fa1`
![#3c4782](https://placehold.co/15x15/3c4782/3c4782.png) `#3c4782`
![#c0588e](https://placehold.co/15x15/c0588e/c0588e.png) `#c0588e`
