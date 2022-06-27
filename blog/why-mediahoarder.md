# Why Media Hoarder? (2022-06-27)

To answer this question, I have to rewind back to _2019-09-09_, almost **3 years** before the writing of this blog post and the first release of **Media Hoarder**.

And yes, this question is very legitimate, because back then the world already had quite a number of media center apps available. Some examples being [XBMC aka Kodi](https://kodi.tv/), [Plex](https://www.plex.tv/) or [Jellyfin](https://jellyfin.org/).

At that time I had the following setup:

- an HTPC with some local storage
- a large file server with lots of additional storage

In order to save electricity, the file server was never running 24/7. So I had a "cache" of anticipated media for the upcoming time as well as the latest media on the HTPC. If necessary, the file server is powered on and either

- the cache on the HTPC is going to be refilled
- or the media is directly accessed on the NAS while it was running

So this left me with the following requirement for a media center application:

#### REQUIREMENT 1: Easily manage multiple sources (e.g. local vs. remote).

This requirement quickly fell short with the available media center apps.

I started to use one Kodi instance, added the remote source and the local one. Did a scan, the media was added. At one point I added more media to the local source but had the remote source turned off, so the rescan ended up having all the remote media removed from the app.

I tried to convince myself to use two portable Kodi instances:

- one instance for the local data
- another instance for the remote data

Problem was: anything I edited (e.g. star rating of movies) was only available for the media of one Kodi intance and not the other.

So, ideally I wanted a media center that lets me define source paths and tell to not remove entries upon rescan if the files are not found.

When filtering you can activate and deactive the sources to your liking, the media is provided in the list for all active sources. So in the times where the remote server is shut off, just deactivate the source and the media of the remote server is hidden.

For me this was already enough to get started on the implementation of a new media center app and while I'm at it, here come some more requirements:

#### REQUIREMENT 1.1: if I rate a medium, it should be rated no matter which source.

So if I have `The Godfather` on a local as well as remote source and rate it on the local source, it should also get the same rating on the remote source.

Also: if I have `Die Hard` on local source only and rate it. It should have the same rating if I copy it to the remote source later.

#### REQUIREMENT 2: No screen changes! (at least in 99% of all cases)

I personally hate screen changes, e.g. you have a list of media, you click/select one, the screen changes to some detail view where you see more data and can play the media. You decide otherwise and the screen changes back to the list. Yeah, no thanks.

#### REQUIREMENT 3: No horizontal scrolling!

Every streaming service implements this shit. Their intention is not for you to have a good overview of available media. So yeah, fuck this.

#### REQUIREMENT 4: Tell the user if automatic meta data retrieval possibly had issues and provide easy access for remediation.

In most cases the available media center apps find the correct meta data for a medium. However, in cases where they do not, they lack in transparency (i.e. they don't tell you about possible inconsistencies) and don't provide an easy access to manually correct the meta data (i.e. let you point to the correct movie in imdb, tmdb or whatever).

This really, really troubled me, because I wanted to clean up some mess, the apps were piling up automatically but I couldn't, at least not easily.

## Conclusion

Take a bit of pain and a whole lot of enthusiasm and eventually a new media center app is born :)
