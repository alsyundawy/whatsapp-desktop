<div align="center">

![downloads](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/total?style=for-the-badge)
![release](https://img.shields.io/github/v/release/alsyundawy/whatsapp-desktop?style=for-the-badge)
![license](https://img.shields.io/github/license/alsyundawy/whatsapp-desktop?style=for-the-badge)

# WhatsApp Desktop

![screenshot](https://raw.githubusercontent.com/alsyundawy/whatsapp-desktop/master/screenshots/whatsapp-screen.png "Main Window")

Unofficial WhatsApp Desktop Client for macOS, Linux, and Windows. Built with [Electron](https://www.electronjs.org/).

</div>

> **Disclaimer**: This is **NOT** an official product from Meta or WhatsApp. This project does not reverse engineer the WhatsApp API or reimplement any part of the WhatsApp client. Any communication between the user and WhatsApp servers is handled entirely by official WhatsApp Web itself; this app functions as a native desktop wrapper with system integrations.

---

## ✨ Features

* **Cross-platform**: macOS (Intel & Apple Silicon), Windows 10/11 (x64), Linux (x64, ia32, ARMv7l)
* **Security Hardened**: URL allowlist validation, CSP & SRI integrity, secure renderer isolation
* **Native Notifications**: Desktop notifications for incoming messages
* **System Tray & Dock**: System tray icon with status, dock bouncing on new messages, unread badge counter
* **Quick Shortcuts**: Focus search via `Cmd+F` (macOS) / `Ctrl+F` (Windows/Linux)
* **Phone Info Dialog**: Displays battery status, WhatsApp web client status, connection state
* **Auto-Launch & Tray**: Configurable start on login and start minimized to tray
* **Custom Styling**: Support for custom CSS stylesheets and themes
* **Media & Privacy Controls**: Toggle avatar visibility, message previews, media thumbnail size, proxy setup
* **Hardware Acceleration**: Option to disable GPU rendering for buggy drivers

---

## 📥 Download WhatsApp Desktop

Download the latest version ([v1.0.1](https://github.com/alsyundawy/whatsapp-desktop/releases/latest)):

| Platform | Download Link | Stats |
| :--- | :--- | :---: |
| **Windows (x64)** | [WhatsApp-win32-x64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-win32-x64.zip) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-win32-x64.zip?style=flat-square) |
| **macOS (Apple Silicon M1/M2/M3)** | [WhatsApp-darwin-arm64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-arm64.zip) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-darwin-arm64.zip?style=flat-square) |
| **macOS (Intel x64)** | [WhatsApp-darwin-x64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-x64.zip) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-darwin-x64.zip?style=flat-square) |
| **Ubuntu / Debian (x64)** | [whatsapp-linux-x64.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-x64.deb) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-x64.deb?style=flat-square) |
| **Ubuntu / Debian (32-bit)** | [whatsapp-linux-ia32.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-ia32.deb) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-ia32.deb?style=flat-square) |
| **Ubuntu / Debian (ARMv7l)** | [whatsapp-linux-armv7l.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-armv7l.deb) | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-armv7l.deb?style=flat-square) |

---

## 💖 Support & Donations

Donations are always appreciated to support ongoing maintenance, security updates, and active development!

[![Donate with PayPal](https://img.shields.io/badge/PayPal-Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/alsyundawy)

* **PayPal**: [https://paypal.me/alsyundawy](https://paypal.me/alsyundawy)

---

## 🛠️ Build from Source

### Prerequisites
* **Node.js**: `>= 22.12.0`
* **Yarn**: `npm install -g yarn`

### Installation
```sh
git clone https://github.com/alsyundawy/whatsapp-desktop.git
cd whatsapp-desktop
npm install
```

### Build Commands

Build for your current or desired platform:

```sh
npm run build:{platform}
```

| Command | Platform | Output Format | Output Directory |
| :--- | :--- | :---: | :--- |
| `npm run build:osx` | macOS (Intel x64) | `.zip` | `build/releases/` |
| `npm run build:osxm1` | macOS (Apple Silicon arm64) | `.zip` | `build/releases/` |
| `npm run build:win` | Windows (x64) | `.zip` | `build/releases/` |
| `npm run build:linux` | Linux (x64) | `.deb` | `build/releases/` |
| `npm run build:linux32` | Linux (ia32) | `.deb` | `build/releases/` |
| `npm run build:linuxarmv7l` | Linux (ARMv7l) | `.deb` | `build/releases/` |
| `npm run build:all` | All platforms | `.deb` / `.zip` | `build/releases/` |

#### Installing on Debian / Ubuntu / Linux Mint
```sh
sudo apt install ./build/releases/whatsapp-linux-x64.deb
sudo apt install -f
```

#### Cross-compiling for Windows (from macOS/Linux)
Requires `wine`:
* macOS: `brew install wine`
* Debian/Ubuntu: `sudo apt install wine`

### Development Mode (Live Run)
```sh
npm run dev
# or
yarn run dev
```

---

## 🤝 Credits & Acknowledgements

This project builds upon the hard work of the open-source community. Sincere gratitude and credits to all original creators and upstream contributors:

* **[@bcalik](https://github.com/bcalik)** (Burak Çalık) — Original creator of [Whatsapp-Desktop](https://github.com/bcalik/Whatsapp-Desktop)
* **[@Enrico204](https://github.com/Enrico204)** (Enrico Fasoli) — Early maintainer and enhancements ([Whatsapp-Desktop](https://github.com/Enrico204/Whatsapp-Desktop))
* **[@oOthkOo](https://github.com/oOthkOo)** (Thomas K.) — Architecture, packaging scripts, and feature developments ([whatsapp-desktop](https://github.com/oOthkOo/whatsapp-desktop))
* **[@benzntech](https://github.com/benzntech)** (Benzntech) — Repository stewardship & distribution ([whatsapp-desktop](https://github.com/benzntech/whatsapp-desktop))
* **[@alsyundawy](https://github.com/alsyundawy)** — Security hardening, CodeQL remediation, Electron modernization, dependency pruning, and CI/CD automation

---

## 📄 Contributions & Issues

Contributions, suggestions, and bug reports are welcome! Please feel free to open an [issue](https://github.com/alsyundawy/whatsapp-desktop/issues) or submit a pull request.
