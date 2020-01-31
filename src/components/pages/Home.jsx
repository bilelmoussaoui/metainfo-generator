import React from 'react'

import ProjectCard from './../ProjectCard'
import { ProjectType } from './../../consts'
import Highlight from 'react-highlight.js'
import FlathubLogo from './../../assets/flathub-logo.svg'
import GNOMESoftwareLogo from './../../assets/gnome-software-logo.svg'
import elementaryLogo from './../../assets/elementary-os-logo.svg'

const content = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Bilal Elmoussaoui 2019 <bilal.elmoussaoui@gnome.org> -->
<component type="desktop-application">
  <id>org.gnome.design.Contrast</id>
  <metadata_license>CC0</metadata_license>
  <project_license>GPL-3.0+</project_license>
  <name>Contrast</name>
  <summary>Check contrast between two colors</summary>
  <description>
    <p>Contrast checks whether the contrast between two colors meet the WCAG requirements.</p>
  </description>
  <screenshots>
    <screenshot type="default">
      <image>https://gitlab.gnome.org/World/design/contrast/raw/master/data/resources/screenshots/screenshot1.png</image>
      <caption>Main Window</caption>
    </screenshot>
  </screenshots>
  <url type="homepage">https://gitlab.gnome.org/World/design/contrast</url>
  <url type="bugtracker">https://gitlab.gnome.org/World/design/contrast/issues</url>
  <url type="donation">https://liberapay.com/bielmoussaoui</url>
  <url type="translate">https://l10n.gnome.org/module/contrast/</url>
  <content_rating type="oars-1.0" />
  <releases>
    <release version="0.0.2" date="2019-08-25">
      <description>
        <p>Translations updates</p>
      </description>
    </release>
    <release version="0.0.1" date="2019-08-07">
      <description>
        <p>First release of Contrast</p>
      </description>
    </release>
  </releases>
  <kudos>
    <kudo>ModernToolkit</kudo>
    <kudo>HiDpiIcon</kudo>
  </kudos>
  <developer_name>Bilal Elmoussaoui</developer_name>
  <update_contact>bilal.elmoussaoui@gnome.org</update_contact>
  <translation type="gettext">contrast</translation>
  <launchable type="desktop-id">org.gnome.design.Contrast.desktop</launchable>
</component>`
const Home = () => {
  return (
    <div className='container'>
      <h3
        style={{ fontWeight: '800', marginTop: '40px', marginBottom: '40px' }}
        className='center-align'
      >
        What's a Metainfo file?
      </h3>
      <p>
        AppStream is a cross-distro effort for enhancing the metadata available
        about software components in the Linux and free-software ecosystem. One
        of the project's goals is to make building software-center applications
        possible, and make interaction with the package sources of a
        distribution smarter. AppStream provides specifications for
        meta-information which is shipped by upstream projects and can be
        consumed by other software. The meta-information includes data which is
        interesting to display in software centers and is mainly useful for
        end-users, as well as descriptions about the public interfaces a
        software component provides, which is mainly useful for developers,
        3rd-party software installers and for automatically installing missing
        components on a distribution, for example missing firmware or
        mimetype-handlers.
      </p>
      A metainfo is usually installed under
      <Highlight language='bash'>$prefix/$datadir/metainfo</Highlight>
      <h3
        style={{ fontWeight: '800', marginTop: '80px', marginBottom: '40px' }}
        className='center-align'
      >
        Which frontends support Metainfo files?
      </h3>
      <div className='row stores-list'>
        <div className='col s12 m4'>
          <div className='card small'>
            <div>
              <img
                src={FlathubLogo}
                width='256px'
                height='256px'
                alt='Flathub'
              />
              <h3 className='card-title'>
                <a href='https://flathub.org'>Flathub</a>
              </h3>
            </div>
            <div className='card-content'></div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card small'>
            <div>
              <img
                src={GNOMESoftwareLogo}
                width='256px'
                height='256px'
                alt='GNOME Software'
              />
              <h3 className='card-title'>
                <a href='https://wiki.gnome.org/Design/Apps/Software'>
                  GNOME Software
                </a>
              </h3>
            </div>
            <div className='card-content'></div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card small'>
            <div>
              <img
                src={elementaryLogo}
                width='256px'
                height='256px'
                alt='elementary OS'
              />
              <h3 className='card-title'><a href='http://appcenter.elementary.io/'>elementary AppCenter</a></h3>
            </div>
            <div className='card-content'></div>
          </div>
        </div>
      </div>
      <h3
        style={{ fontWeight: '800', marginTop: '80px', marginBottom: '40px' }}
        className='center-align'
      >
        Select a component
      </h3>
      <div>
        <div className='row'>
          <ProjectCard
            name='Desktop Application'
            type={ProjectType.DesktopApp}
            description='A desktop application is an application which has a graphical user interface and is commonly used with mouse and keyboard. It also ships a Freedesktop .desktop file to be visible in application menus. '
          />
          <ProjectCard
            name='CLI Application'
            type={ProjectType.CliApp}
            description='A console application is any application that has a command-line or text-based interface and is designed to be used by a human user on the command line.'
          />
          <ProjectCard
            name='Web Application'
            type={ProjectType.WebApp}
            description='A web application is an application running remotely that is accessed via a web browser and built on the web platform. '
          />
          <ProjectCard
            name='Service'
            type={ProjectType.Service}
            description='A service component is any software that is started and supervised by the Operating Systems "init" facility, such as systemd.'
          />
          <ProjectCard
            name='Addon'
            type={ProjectType.Addon}
            description='Some components are not standalone, but rather extend existing software installed on the system and can only be used together with it. The addon component type exists to reflect that.'
          />
          <ProjectCard
            name='Font'
            type={ProjectType.Font}
            description=' A software center can allow users to install additional fonts using font metadata'
          />
          <ProjectCard
            name='Icon Theme'
            type={ProjectType.IconTheme}
            description='Icon themes as defined in the Freedesktop Icon Theme Specification can contain icon-theme metainfo files to be installed by software centers'
          />
          <ProjectCard
            name='Codec'
            type={ProjectType.Codec}
            description='Software centers might want to special-case codec handling.'
          />
          <ProjectCard
            name='Driver'
            type={ProjectType.Driver}
            description='The driver component type describes drivers for hardware devices as well as other Linux kernel drivers for e.g. virtualization support'
          />
          <ProjectCard
            name='Localization'
            type={ProjectType.Localization}
            description='The localization component type describes language packs for individual software components or groups of software components'
          />
          <ProjectCard
            name='Runtime'
            type={ProjectType.Runtime}
            description='Components of type runtime describe a collection of interdependent software components that are required to run other software'
          />
          <ProjectCard
            name='Firmware'
            type={ProjectType.Firmware}
            description='Device firmware can be accompanied by AppStream upstream metadata, to be incorporated by a distribution. Tools like fwupd make use of this metadata to automatically update flashed firmware of devices found in the machine.'
          />
          <ProjectCard
            name='Input Method'
            type={ProjectType.InputMethod}
            description='It is a nice feature for a software center to allows users the installation of additional input methods.'
          />
          <ProjectCard
            name='Repository'
            type={ProjectType.Repository}
            description='A repository component describes a remote archive of digital content, usually other software or additional data (e.g. themes, icons, books, music, ...). Upon installation of a component of this type, the repective repository is added to the system and activated, letting the user access the new content.'
          />

          <ProjectCard
            name='Operating System'
            type={ProjectType.OperatingSystem}
            description='The operating-system component type describes a whole operating system such as GNU/Linux distributions like Debian, Fedora, RHEL, etc. or Windows and macOS.'
          />
        </div>
      </div>
      <h3
        style={{ fontWeight: '800', marginTop: '80px', marginBottom: '40px' }}
        className='center-align'
      >
        Examples of metainfo files
      </h3>
      <Highlight language='xml'>{content}</Highlight>
    </div>
  )
}

export default Home
