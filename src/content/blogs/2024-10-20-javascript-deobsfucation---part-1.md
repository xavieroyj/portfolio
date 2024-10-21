---
title: Javascript Deobsfucation - Part 1
pubDate: 2024-10-20T11:57:06.080Z
fmContentType: blogs
author: Xavier Ong
description: Everyone knows Javascript but do you understand what goes on behind the scenes when it's obsfucated? Let's learn together!
keywords: []
draft: true
---

Author note: I've learned those techniques from a combination of blog posts from [nero](https://nerodesu017.github.io/) and [steakenthusiast](https://steakenthusiast.github.io/). They were the one who got me interested in the field of reverse engineering. If you have already read their writeups, this would likely be a rehash of it with my own interpretations.

# Introduction
In this series of blog posts, i will guide you through the basic of reverse engineering obsfucated Javascript codes and how to disassemble it back into a readable/semi-readable code whenever possible. 


## What does obsfucated code mean?

In general, obsfucated code means the act of transforming source code into code that is harder for humans to read it. This is done primarily to prevent people from tampering with the code. This can also be used by bad actors to prevent people from reading their malicious codes.

## Tools that we need
