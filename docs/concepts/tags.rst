.. _tags:

====
Tags
====

Tags are an extension of :ref:`categories <categories>` and meant to expand on the meta-data included in a :ref:`transaction <transactions>`. You can add multiple tags to a transaction.

Tags can be useful to group expenses together, possibly in another context than your categories. For examples, tags might include:

* ``too-expensive``
* ``work-expense``

Or maybe something else entirely. This is up to you.

Mapbox
------

You can add a `Mapbox <https://www.mapbox.com/>`_ API key to your ``.env`` file which allows you to give tags a location.

Special tags
------------

When you import data into Firefly III, a special tag will be created for each transaction. It is called `Import with key 'xxxx'` where the key is a custom code every time.