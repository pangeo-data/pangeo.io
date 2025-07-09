---
name: 'Post-AGU Pangeo Hackathon'
starttime: '2024-12-14T09:00-05:00'
endtime: '2024-12-14T16:30-05:00'
location: 'Washington, DC, USA'
description: 'Join the Pangeo community for a hack-day / working meeting after AGU 2024'
show_pangeo_code_of_conduct: True
---

## Overview

Please join us for a Pangeo working meeting / hackathon on December 14 in Washington, DC! This event serves to bring together members of the Pangeo community to solve problems related to scientific research and programming.

- **When**: Saturday, December 14, 2024
- **Time**: 9 AM - 4:30 PM ET
- **Where to register**: [Luma](https://lu.ma/8mj6f3qn)
- **Registration deadline**: November 20, 2024
- **Where**: Development Seed office (across the street from the convention center)
- **Registration cost**: No registration fee
- **Logistics**: Participants are expected to provide their own transportation to and from the event. Lunch will be provided by Earthmover!

**Goals**:

- Gather members of the Pangeo community to solve problems related to scientific research and programming
- Make progress on moving forward from the "What's next for Pangeo" discussions
- Support the development of domain-specific geoscience packages

## Agenda

- 8:30 - 9:00 - Coffee
- 9:00 - 9:15 - Welcome and logistics
- 9:15 - 9:30 - Introduction to projects
- 9:30 - 12:00 - Break-out groups
- 12:00 - 13:00 - Lunch
- 13:00 - 15:00 - Break-out groups
- 15:00 - 15:15 - Project wrap-up
- 15:15 - 15:30 - Break
- 15:30 - 16:30 - Discussion

## Breakout Groups

### Zarr3 & Icechunk (leader: Joe Hamman)

#### Description

Zarr-Python 3 and the Icechunk storage backend are just about to be released. This breakout will focus on two topics:

- Ticking off final tasks ahead of the Zarr 3.0 and Icechunk 1.0 releases. Example contributions could include code development, documentation, examples, tutorials, performance benchmarks and/or demo datasets.
- Integration with tools across the Pangeo ecosystem. If you have a project that uses Zarr (or could use Zarr/Icechunk), we can use this breakout to help you get started. If you are interested in Icechunk+Virtualizarr, this breakout would also be a good fit for you.

#### Pre-requisites

Some knowledge of Zarr and Xarray will help you. But we can help anyone that knows Python and wants to get started with Zarr.

### Earthaccess (leaders: Luis Lopez and Julia Lowndes)

#### Description

Come hack on the earthaccess python library to try to close some of the issues that are outstanding, and extend its functionality with the Pangeo ecosystem. Includes improving access patterns to mission data (Zarr and services). Bring your ideas, not limited to this!

#### Pre-requisites

A friendly mindset, and either engineering, documentation, or coordinating skills to support this work!

### Lower the barrier to using pangeo-notebook docker image (leader: Eli Holmes)

#### Description

Set-up and installation of tooling, even really basic tooling like an IDE, is a barrier to use and learning. I have been working on making scientific Docker images (like Pangeo notebook) easier to use outside of JupyterHubs. I am a JupyterHub admin, but most people don't have access to one. This project shows some ideas for how to create links that 'spin' up a JupyterLab based image in Codespaces: [https://nmfs-opensci.github.io/container-images/](https://nmfs-opensci.github.io/container-images/), but it is desperately slow. In this hack session, I'd like to work on other ideas for running Pangeo Docker images and test out these ideas. This might mean improving documentation (how-to) for running images locally or it might be working up (and debugging) running images in various VMs (like Google Cloud say). Or we could work on some bash scripts that users run that create an easier user start-up experience when running docker images locally. Or we try to get a pangeo-notebook running on a Google Workstation. We'll basically be working on this page: [https://pangeo-docker-images.readthedocs.io/en/latest/howto/launch.html#how-to-launch-a-notebook-using-these-images](https://pangeo-docker-images.readthedocs.io/en/latest/howto/launch.html#how-to-launch-a-notebook-using-these-images).

#### Pre-requisites

Experience with running Docker images. Bash scripts or devcontainers. Or no experience and be a tester.

### VirtualiZarr (leader: Tom Nicholas)

#### Description

We’ll work on VirtualiZarr as a tool for creating cloud-optimized virtual datasets which point to pre-existing multidimensional scientific data.

Topic ideas:

- Sharing Virtualization workflows (xref [https://github.com/zarr-developers/VirtualiZarr/issues/320](https://github.com/zarr-developers/VirtualiZarr/issues/320))
- Writing virtual references to Icechunk
- Adding support for new filetypes (xref [https://github.com/zarr-developers/VirtualiZarr/issues/218](https://github.com/zarr-developers/VirtualiZarr/issues/218))
- Support for groups (xref [https://github.com/zarr-developers/VirtualiZarr/issues/84](https://github.com/zarr-developers/VirtualiZarr/issues/84))
  Zarr-Python v3 integration (xref [https://github.com/zarr-developers/VirtualiZarr/issues/17](https://github.com/zarr-developers/VirtualiZarr/issues/17))
- Documentation
  New users welcome!

#### Pre-requisites

Users just need a dataset they want to virtualize, developers ideally should have some familiarity with Zarr/Kerchunk/VirtualiZarr, though we will take anyone eager!

### Xarray DataTree (leader: Eni Awowale)

A definite breakout group, stay tuned!

### Machine Learning (leader: Wei Ji Leong)

#### Description

Let's make the integration between xarray and GPU libraries (e.g. CuPy, Pytorch, JaX) more seamless!

Topic ideas:

- See how [cupy-xarray](https://github.com/xarray-contrib/cupy-xarray) might work with NVIDIA DALI pipelines - [https://github.com/xarray-contrib/cupy-xarray/issues/54](https://github.com/xarray-contrib/cupy-xarray/issues/54)
- Work on [xbatcher](https://github.com/xarray-contrib/xbatcher/issues) to handle sampling/shuffling operations more efficiently - [https://github.com/xarray-contrib/xbatcher/discussions/78](https://github.com/xarray-contrib/xbatcher/discussions/78)
- Create a new [Project Pythia](https://github.com/ProjectPythia) cookbook on ML topics related to weather/climate science or energy resiliency

#### Pre-requisites

We'll be working with GPU libraries, so it might be helpful if you have access to a GPU (on your laptop or a cloud/HPC server) to run things.
If not, feel free to join still and we can work out something together (e.g. pair programming) as a group.

## Accessibility

The Pangeo community strives to host inclusive, accessible events. To be respectful of those with allergies and environmental sensitivities, please refrain from wearing strong fragrances. To request an accommodation or for inquiries about accessibility, please contact Max Jones ([@maxrjones](https://discourse.pangeo.io/u/maxrjones)).
