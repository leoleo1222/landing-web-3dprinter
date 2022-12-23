# 3D-Printer

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

