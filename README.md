<!-- markdownlint-disable-file MD033 MD041 -->

<p align="center">
  <a href="https://github.com/alsyundawy/whatsapp-desktop">
    <img src="screenshots/whatsapp-screen.png" alt="WhatsApp Desktop Banner" width="100%">
  </a>
</p>

<h1 align="center">💬 WhatsApp Desktop</h1>

<h3 align="center">Enterprise-Grade Cross-Platform Native Desktop Client for WhatsApp Web (macOS · Linux · Windows)</h3>

<p align="center">
  <a href="https://github.com/alsyundawy/whatsapp-desktop/releases/tag/v1.0.1"><img src="https://img.shields.io/badge/Release-v1.0.1-0284c7?style=for-the-badge&logo=github&logoColor=white" alt="Latest Release v1.0.1"></a>
  <a href="https://www.electronjs.org/"><img src="https://img.shields.io/badge/Electron-44.7.2-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron 44.7.2"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-22.x%20LTS-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js 22 LTS"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License: GPL-3.0"></a>
  <a href="#security-architecture--hardening"><img src="https://img.shields.io/badge/Security-CodeQL%20%7C%20Dependabot%200%20Alerts-success?style=for-the-badge&logo=securityscorecard&logoColor=white" alt="Security Hardened"></a>
  <a href="#download-whatsapp-desktop"><img src="https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Linux-orange?style=for-the-badge&logo=linux&logoColor=white" alt="Cross-Platform"></a>
  <a href="https://github.com/alsyundawy/whatsapp-desktop/releases"><img src="https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/total?style=for-the-badge&logo=github&color=blueviolet" alt="Total Downloads"></a>
</p>

<p align="center">
  A secure, lightweight, and modern desktop client for WhatsApp Web built with Electron. Delivers system tray integration, native notifications, dock badges, custom stylesheet support, battery optimizations, and zero third-party telemetry.
</p>

<p align="center">
  <a href="https://github.com/alsyundawy/whatsapp-desktop/releases/tag/v1.0.1">
    <img src="https://img.shields.io/badge/🚀_Download_Latest_Release-v1.0.1-238636?style=for-the-badge&logo=github&logoColor=white" alt="Download Latest Release v1.0.1">
  </a>
  <a href="https://github.com/alsyundawy/whatsapp-desktop/releases">
    <img src="https://img.shields.io/badge/📦_All_Releases-View-0284c7?style=for-the-badge&logo=github&logoColor=white" alt="All Releases">
  </a>
</p>

> Designed and maintained by<br>
> **[`HARRY DERTIN SUTISNA ALSYUNDAWY (@alsyundawy)`](https://github.com/alsyundawy)** —<br>
> Modern, secure, and privacy-conscious native desktop wrapper for WhatsApp Web with multi-platform system integrations.
>
> 📦 **[`GitHub Releases (v1.0.1)`](https://github.com/alsyundawy/whatsapp-desktop/releases/tag/v1.0.1)** &nbsp;|&nbsp;
> ⚡ **[`Quick Start`](#quick-start--installation)** &nbsp;|&nbsp;
> 🔒 **[`Security Architecture`](#security-architecture--hardening)** &nbsp;|&nbsp;
> 📜 **[`Full Changelog`](#changelog)** &nbsp;|&nbsp;
> 💖 **[`Support via PayPal`](https://www.paypal.me/alsyundawy)** &nbsp;|&nbsp;
> 🇮🇩 **[`QRIS Donation`](#support--donation)**

---

## 🧭 Navigation

- [About The Project](#about-the-project)
- [User Interface](#user-interface)
- [Key Features](#key-features)
- [Download WhatsApp Desktop](#download-whatsapp-desktop)
- [System Requirements](#system-requirements)
- [Quick Start & Installation](#quick-start--installation)
  - [Debian / Ubuntu / Linux Mint](#debian--ubuntu--linux-mint)
  - [macOS (Intel & Apple Silicon)](#macos-intel--apple-silicon)
  - [Windows 10 / 11](#windows-10--11)
- [Build from Source](#build-from-source)
  - [Prerequisites](#prerequisites)
  - [Repository Setup](#repository-setup)
  - [Build Matrix & Commands](#build-matrix--commands)
  - [Cross-Compilation for Windows](#cross-compilation-for-windows-from-macos--linux)
  - [Development Mode (Live Run)](#development-mode-live-run)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Security Architecture & Hardening](#security-architecture--hardening)
- [Quality Assurance & Verification](#quality-assurance--verification)
- [Changelog](#changelog)
- [Documentation Notes](#documentation-notes)
- [Project Directory Structure](#project-directory-structure)
- [Contributing](#contributing)
- [Maintainer & Contact](#maintainer--contact)
- [Credits & Acknowledgements](#credits--acknowledgements)
- [Support & Donation](#support--donation)
- [License](#license)

---

## About The Project

**WhatsApp Desktop** is an unofficial, native desktop wrapper for WhatsApp Web, engineered with [Electron](https://www.electronjs.org/). It bridges the gap between web applications and native desktop operating systems by providing hardware integrations, native system notifications, custom CSS themes, dock badge counters, and seamless background tray management across macOS, Linux, and Windows.

Unlike keeping a browser tab open, WhatsApp Desktop runs in an isolated runtime environment with dedicated system resource controls, audio rate optimizations, configurable proxy settings, and GPU fallback options.

> [!NOTE]
> **Legal Disclaimer:** This project is **NOT** an official product from Meta Platforms or WhatsApp Inc. It does not reverse engineer the WhatsApp API, intercept private keys, or reimplement any part of the WhatsApp protocol. All communication between the user and WhatsApp servers is executed securely through the official WhatsApp Web interface (`web.whatsapp.com`) within an isolated native container.

---

## User Interface

<p align="center">
  <img src="screenshots/whatsapp-screen.png" alt="WhatsApp Desktop Main Interface" width="95%">
</p>

*WhatsApp Desktop running on desktop with native menu bar, contact search, system notifications, and dark theme support.*

---

## Key Features

- 🔒 **Enterprise-Grade Security & Hardening:**
  - **Zero Vulnerability Posture:** Validated against CodeQL and Dependabot with 0 open security alerts across all dependencies.
  - **Strict URL Hostname Allowlist (CWE-20 Defense):** Hardened URL parser validating target domains before accepting launch arguments or second-instance signals, completely eliminating parameter injection risks.
  - **Subresource Integrity & Bundled Assets (CWE-829 Defense):** Local bundling of Materialize CSS and JS within internal renderers (`app/css/` and `app/js/lib/`), fully removing external CDN dependencies and eliminating supply-chain attack vectors.
  - **Protocol Allowlist:** Enforced strict `http:` and `https:` protocol verification before delegating URLs to `shell.openExternal`.
  - **Safe DOM Injection:** Eliminated raw string concatenation in `executeJavaScript` via sanitized `JSON.stringify` serialization.

- ⚡ **Cross-Platform Native Desktop Integration:**
  - **Native OS Notifications:** Toast notifications for incoming messages with audio feedback.
  - **Dock & Taskbar Badges:** Unread message counters dynamically rendered on the dock icon (macOS) and taskbar (Windows/Linux).
  - **Dock Bounce Effect:** Interactive dock icon bouncing on macOS when new messages arrive.
  - **System Tray Icon:** Unread message indicator badge and warning icon state in the system tray.
  - **Phone Status Dialog:** Live inspector displaying smartphone battery percentage, WhatsApp Web client versions, and network status.
  - **Quick Search Focus:** Instant contact search activation via `Cmd+F` (macOS) or `Ctrl+F` (Windows/Linux).

- 🎨 **Privacy & Customization Controls:**
  - **Avatar & Preview Privacy:** Granular toggles to hide contact avatars and message preview text in public workspaces.
  - **Custom Stylesheets:** Inject custom user CSS to personalize themes, typography, or ambient dark modes.
  - **Media Thumbnail Size:** Configurable thumbnail dimensions for photos and videos.
  - **Custom Proxy Configuration:** Direct proxy setup for secure corporate or encrypted gateway connections.

- 🔋 **Performance & Battery Optimization:**
  - **Event-Driven Audio Rates:** Replaced aggressive 200ms DOM polling with event-driven mutation listeners to minimize CPU usage and preserve battery life.
  - **GPU Fallback Mode:** Optional `--disable-gpu` toggle for stability on buggy graphics hardware and virtual machines.
  - **Tray Minimization & Auto-Start:** Configurable launch on system startup and minimize-to-tray on window close.

---

## Download WhatsApp Desktop

Download the production-ready binary for your operating system ([Release v1.0.1](https://github.com/alsyundawy/whatsapp-desktop/releases/latest)):

| Platform | Architecture | Binary Package | Size | Status |
| :--- | :---: | :--- | :---: | :---: |
| **Windows 10 / 11** | `x64` | [WhatsApp-win32-x64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-win32-x64.zip) | ~86.2 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-win32-x64.zip?style=flat-square) |
| **macOS (Apple Silicon)** | `arm64` (M1/M2/M3) | [WhatsApp-darwin-arm64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-arm64.zip) | ~237.5 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-darwin-arm64.zip?style=flat-square) |
| **macOS (Intel)** | `x64` | [WhatsApp-darwin-x64.zip](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-x64.zip) | ~229.7 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/WhatsApp-darwin-x64.zip?style=flat-square) |
| **Ubuntu / Debian / Mint** | `x86_64` | [whatsapp-linux-x64.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-x64.deb) | ~73.0 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-x64.deb?style=flat-square) |
| **Ubuntu / Debian (32-bit)** | `ia32` | [whatsapp-linux-ia32.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-ia32.deb) | ~63.1 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-ia32.deb?style=flat-square) |
| **ARM Linux (Raspberry Pi)** | `armv7l` | [whatsapp-linux-armv7l.deb](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-armv7l.deb) | ~59.2 MiB | ![Stats](https://img.shields.io/github/downloads/alsyundawy/whatsapp-desktop/latest/whatsapp-linux-armv7l.deb?style=flat-square) |

---

## System Requirements

| Operating System | Minimum Architecture | Memory (RAM) | Storage Space | Notes |
| :--- | :--- | :---: | :---: | :--- |
| **macOS** | macOS 11.0 (Big Sur) or higher | 4 GB | 500 MB | Universal support for Intel and Apple Silicon (M-series) |
| **Windows** | Windows 10 or Windows 11 (64-bit) | 4 GB | 300 MB | Standalone portable executable or extracted archive |
| **Linux** | Debian 11+, Ubuntu 20.04+, Mint 20+, Fedora 36+ | 2 GB | 250 MB | Requires `dpkg` and standard system GTK / libnotify libraries |

---

## Quick Start & Installation

### Debian / Ubuntu / Linux Mint

Download the `.deb` package and install via terminal:

```sh
# Download 64-bit package
wget https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/whatsapp-linux-x64.deb

# Install package
sudo apt install ./whatsapp-linux-x64.deb

# Fix missing dependencies if needed
sudo apt install -f
```

Launch from your desktop application menu or via terminal:
```sh
whatsapp-desktop
```

### macOS (Intel & Apple Silicon)

1. Download [`WhatsApp-darwin-arm64.zip`](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-arm64.zip) (for M1/M2/M3) or [`WhatsApp-darwin-x64.zip`](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-darwin-x64.zip) (for Intel).
2. Unzip the downloaded archive.
3. Drag `WhatsApp.app` into your `/Applications` folder.
4. Launch `WhatsApp` from Launchpad or Spotlight (`Cmd + Space`).

### Windows 10 / 11

1. Download [`WhatsApp-win32-x64.zip`](https://github.com/alsyundawy/whatsapp-desktop/releases/latest/download/WhatsApp-win32-x64.zip).
2. Extract the ZIP archive to your preferred location (e.g., `C:\Program Files\WhatsApp Desktop` or Desktop).
3. Run `WhatsApp.exe`.

---

## Build from Source

### Prerequisites

* **Node.js**: `v22.12.0` or higher (Active LTS recommended)
* **Yarn**: `v1.22.22` or higher (`npm install -g yarn`)
* **Operating System**: macOS, Linux, or Windows (Wine required for Windows cross-compilation on POSIX)

### Repository Setup

```sh
# Clone repository
git clone https://github.com/alsyundawy/whatsapp-desktop.git
cd whatsapp-desktop

# Install project dependencies
npm install
```

### Build Matrix & Commands

Run the platform-specific build script to generate distributable binaries:

```sh
npm run build:{platform}
```

| NPM Script | Target Platform | Target Arch | Format | Artifact Output Location |
| :--- | :--- | :---: | :---: | :--- |
| `npm run build:osx` | macOS | `x64` (Intel) | `.zip` | `build/releases/WhatsApp-darwin-x64.zip` |
| `npm run build:osxm1` | macOS | `arm64` (Apple Silicon) | `.zip` | `build/releases/WhatsApp-darwin-arm64.zip` |
| `npm run build:win` | Windows | `x64` | `.zip` | `build/releases/WhatsApp-win32-x64.zip` |
| `npm run build:linux` | Linux | `x64` | `.deb` | `build/releases/whatsapp-linux-x64.deb` |
| `npm run build:linux32` | Linux | `ia32` (32-bit) | `.deb` | `build/releases/whatsapp-linux-ia32.deb` |
| `npm run build:linuxarmv7l` | Linux | `armv7l` (ARM) | `.deb` | `build/releases/whatsapp-linux-armv7l.deb` |
| `npm run build:all` | All Platforms | Matrix | `.zip` / `.deb` | `build/releases/*` |

### Cross-Compilation for Windows (from macOS / Linux)

Cross-compiling Windows packages on macOS or Linux requires `wine` for icon extraction and PE header injection:

```sh
# macOS via Homebrew
brew install wine

# Debian / Ubuntu / Linux Mint
sudo apt install wine
```

### Development Mode (Live Run)

To run the application locally without compiling binaries each time:

```sh
npm run dev
# or
yarn run dev
```

---

## Keyboard Shortcuts

| Shortcut (macOS) | Shortcut (Windows / Linux) | Action Description |
| :---: | :---: | :--- |
| <kbd>Cmd</kbd> + <kbd>F</kbd> | <kbd>Ctrl</kbd> + <kbd>F</kbd> | Focus contact search field |
| <kbd>Cmd</kbd> + <kbd>R</kbd> | <kbd>Ctrl</kbd> + <kbd>R</kbd> | Reload WhatsApp Web view |
| <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | Toggle Chrome Developer Tools |
| <kbd>Cmd</kbd> + <kbd>+</kbd> | <kbd>Ctrl</kbd> + <kbd>+</kbd> | Zoom in interface |
| <kbd>Cmd</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zoom out interface |
| <kbd>Cmd</kbd> + <kbd>0</kbd> | <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset interface zoom level |
| <kbd>Cmd</kbd> + <kbd>H</kbd> | <kbd>Ctrl</kbd> + <kbd>M</kbd> | Hide window / minimize to system tray |
| <kbd>Cmd</kbd> + <kbd>Q</kbd> | <kbd>Ctrl</kbd> + <kbd>Q</kbd> | Quit WhatsApp Desktop completely |

---

## Security Architecture & Hardening

WhatsApp Desktop adheres to modern defensive security practices:

```text
┌─────────────────────────────────────────────────────────────┐
│                   MAIN PROCESS (Node.js)                    │
│   • URL Allowlist Validation (hostname: web.whatsapp.com)   │
│   • External Link Protocol Verification (http/https only)   │
│   • Safe Window Lifecycle & Tray Management                 │
└──────────────────────────────┬──────────────────────────────┘
                               │ IPC Channel (Context Isolated)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 RENDERER PROCESS (Chromium)                 │
│   • Local Materialize CSS/JS Bundles (CWE-829 Eliminated)   │
│   • Sanitized JSON.stringify Script Injections              │
│   • Zero Remote CDN Scripts or Unsigned Code Execution      │
└─────────────────────────────────────────────────────────────┘
```

1. **CWE-20 (Improper Input Validation) Mitigation:**
   Previous versions used raw substring indexing (`indexOf`) to inspect CLI parameters. This was replaced with standard `new URL(url).hostname` domain allowlisting ensuring only `web.whatsapp.com` domains are evaluated.
2. **CWE-829 (Inclusion of Functionality from Untrusted Sphere) Mitigation:**
   External CDN links (`cdnjs.cloudflare.com`) in `about.html`, `settings.html`, and `phoneinfo.html` were completely purged and replaced with local, immutable bundles in `app/css/` and `app/js/lib/`.
3. **Supply Chain Hardening:**
   Deprecated packages (`request`, `node-notifier`, `auto-launch`, `electron-context-menu`) were pruned. The packaging engine was modernized to `@electron/packager@20.3.0` running on Node.js 22 LTS, closing all downstream vulnerabilities (`extract-zip`, `sprintf-js`, `qs`, `tough-cookie`, `form-data`).

---

## Quality Assurance & Verification

- **CodeQL Status:** **0 Open Alerts** (CWE-20, CWE-829 resolved).
- **Dependabot Status:** **0 Open Alerts** (All 16 vulnerabilities patched across npm and yarn lockfiles).
- **CI/CD Build Matrix:** Automated builds tested and validated on macOS (`macos-latest`), Linux (`ubuntu-latest`), and Windows (`windows-latest`).

---

## Changelog

### Version 1.0.1 (October 2026) — Security Hardening, Packager Modernization & Multi-OS CI/CD

- **🔒 Security — CodeQL Remediation (CWE-20 & CWE-829):**
  - Replaced unparsed argument check with proper `URL.hostname` allowlisting in `main.js`.
  - Bundled Materialize CSS and JS locally in `app/css/` and `app/js/lib/` to eliminate remote CDN execution risk.
  - Enforced strict `http:` and `https:` protocol verification before calling `shell.openExternal`.
  - Sanitized script injection via `JSON.stringify` serialization.
- **📦 Supply Chain & Dependabot Remediation:**
  - Pruned deprecated `request`, `node-notifier`, `auto-launch`, and `electron-context-menu` packages.
  - Upgraded packaging engine to `@electron/packager@20.3.0` and runner environments to Node.js 22 LTS.
  - Resolved all open alerts (#125, #126, #137, #138 for `extract-zip`; #145, #148 for `sprintf-js`).
- **⚡ Bug Fixes & Performance:**
  - Resolved tray icon warning fall-through in `updateTrayIcon()`.
  - Throttled audio playback rate observer from 200ms CPU polling to event-driven listeners.
  - Migrated `dialog.showOpenDialog` to standard Promise-based handling in `settings.js`.
  - Fixed view reference errors in `phoneinfo.js` and `settings.js`.

---

### Version 1.0.0 — Initial Release

- Initial release with native notifications, tray support, custom stylesheet support, and multi-platform packaging.

---

## Documentation Notes

> [!IMPORTANT]
> 1. **Camera & Microphone Access:** On macOS Mojave (10.14) and newer, ensure permission for Camera and Microphone is granted under `System Settings > Privacy & Security` if you intend to send voice notes or participate in video calls.
> 2. **Wine Dependency for Cross-Compilation:** Compiling Windows binaries from macOS or Linux requires `wine` to inject Windows application icons. If Wine is not installed, the build script will automatically bypass icon injection and complete successfully.
> 3. **Proxy Settings:** When configuring proxy servers in the Settings dialog, restart the application for network changes to take effect.

---

## Project Directory Structure

```text
whatsapp-desktop/
├── .github/
│   ├── dependabot.yml         # Automated weekly dependency updates
│   └── workflows/
│       └── release.yml        # Multi-OS CI/CD build & release pipeline (Node 22)
├── LICENSE                    # GNU General Public License v3.0
├── README.md                  # Comprehensive project documentation
├── SECURITY.md               # Security policy & vulnerability reporting
├── app/                       # Electron application source code
│   ├── assets/                # Application icons, badges, and splash images
│   ├── css/                   # Stylesheets and local Materialize CSS bundle
│   ├── html/                  # Application views (about, phoneinfo, settings)
│   ├── js/                    # Injected scripts, views logic, and local JS libraries
│   ├── locale/                # Multi-language gettext translation files
│   ├── main.js                # Electron main process & lifecycle management
│   ├── menu.js                # Native application menu configurations
│   └── package.json           # Application runtime dependencies
├── build/                     # Build templates and packaged releases
│   ├── assets/                # Platform icons (icns, ico, png) and maintainer banner
│   ├── releases/              # Compiled distributable binaries (.zip, .deb)
│   └── templates/             # Debian packaging controls and desktop shortcuts
├── package.json               # Development dependencies (@electron/packager, electron)
├── screenshots/               # UI preview screenshots
└── scripts/                   # Shell scripts for building macOS, Linux, and Windows
```

---

## Contributing

Contributions, bug reports, and suggestions are welcome:

1. Fork the repository (`https://github.com/alsyundawy/whatsapp-desktop/fork`).
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request with a clear description of your improvements.

---

## Maintainer & Contact

<p align="center">
  <a href="https://www.alsyundawy.com">
    <img src="https://raw.githubusercontent.com/alsyundawy/File-Directory-Browser/main/assets/alsyundawy-banner.png" alt="Alsyundawy IT Solution Banner" width="100%">
  </a>
</p>

### Harry Dertin Sutisna Alsyundawy (@alsyundawy)

- 🌐 Website: [https://www.alsyundawy.com](https://www.alsyundawy.com)
- 💻 GitHub: [@alsyundawy](https://github.com/alsyundawy)
- 🐦 Twitter / X: [@alsyundawy](https://x.com/alsyundawy)
- 🏢 Organization: [WWW.ALSYUNDAWY.NET](https://www.alsyundawy.net)
- 📍 Location: DKI Jakarta, Indonesia

---

## Credits & Acknowledgements

This project builds upon the hard work of the open-source community. Sincere gratitude and credits to all original creators and upstream contributors:

* **[@bcalik](https://github.com/bcalik)** (Burak Çalık) — Original creator of [Whatsapp-Desktop](https://github.com/bcalik/Whatsapp-Desktop)
* **[@Enrico204](https://github.com/Enrico204)** (Enrico Fasoli) — Early maintainer and enhancements ([Whatsapp-Desktop](https://github.com/Enrico204/Whatsapp-Desktop))
* **[@oOthkOo](https://github.com/oOthkOo)** (Thomas K.) — Architecture, packaging scripts, and feature developments ([whatsapp-desktop](https://github.com/oOthkOo/whatsapp-desktop))
* **[@benzntech](https://github.com/benzntech)** (Benzntech) — Repository stewardship & distribution ([whatsapp-desktop](https://github.com/benzntech/whatsapp-desktop))
* **[@alsyundawy](https://github.com/alsyundawy)** — Security hardening, CodeQL remediation, Electron modernization, dependency pruning, and CI/CD automation

---

## Support & Donation

If this application is helpful for your daily workflow, you can support ongoing development and maintenance here:

- **PayPal**: [`https://www.paypal.me/alsyundawy`](https://www.paypal.me/alsyundawy)

### 🇮🇩 QRIS (Quick Response Code Indonesian Standard)

Scan the QRIS barcode below using any Indonesian mobile banking app (BCA, Mandiri, BRI, BNI, BSI, CIMB Niaga, Permata) or e-wallet (GoPay, OVO, DANA, LinkAja, ShopeePay):

<p align="center">
  <img src="https://github.com/user-attachments/assets/a0126f28-6dde-43da-ba14-d7c9a27de0df" alt="QRIS Donation Barcode - ALSYUNDAWY" width="320">
</p>

- **Merchant / Account Name**: **ALSYUNDAWY IT SOLUTION**
- **NMID**: **`ID1020021153676`**
- **Direct Barcode Asset Link**: [`https://github.com/user-attachments/assets/a0126f28-6dde-43da-ba14-d7c9a27de0df`](https://github.com/user-attachments/assets/a0126f28-6dde-43da-ba14-d7c9a27de0df)
- **WhatsApp Confirmation**: [`+62 856-8515-212`](https://wa.me/628568515212)

---

## License

This project is licensed under the **GNU General Public License v3.0** — see the [`LICENSE`](LICENSE) file for details.

Copyright (c) 2026 **Harry Dertin Sutisna Alsyundawy (alsyundawy)** and original contributors.

---

<p align="center">
  <img src="https://repobeats.axiom.co/api/embed/78ddb5f1a231029b742cc467a74bcce400941d0f.svg" alt="Repobeats analytics image">
</p>
