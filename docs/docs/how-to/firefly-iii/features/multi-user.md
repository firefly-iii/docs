# How to make Firefly III multi-user?

Firefly III supports an unlimited amount of users, who all have their own financial administration, completely separated from other users.

This is disabled by default: most users install Firefly III for themselves, so as a security measure registration is blocked after the first user.

## How do I enable multi-user mode?

The first user that registers itself automatically becomes the "owner". This user can enable multi-user mode.

To enable registrations again, go to `/admin` and click "Configuration options for Firefly III". Then, unselect "Disable user registration" and press "Store configuration".

## Can I share my administration with other users?

At the moment, you cannot. Sorry about that. I am working on a sharing model where you can share your administration with other users, and give them read/write rights to different parts of it. This is a big project and will take a while.
