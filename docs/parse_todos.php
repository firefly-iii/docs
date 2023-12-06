<?php
declare(strict_types=1);


$path       = __DIR__ . '/docs';
$extensions = ['md'];
$files      = [];
$todos      = [];
$warnings   = [];

$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach ($objects as $name => $object) {
    if ($object->isFile()) {
        // get extension:
        $parts = explode('.', $name);
        $ext   = $parts[count($parts) - 1];
        if (\in_array($ext, $extensions, true)) {
            $files[] = $name;
        }
    }
}

/** @var string $file */
foreach ($files as $file) {
    $content = file_get_contents($file);
    if ('' === $content) {
        echo sprintf('[!]  File is empty: %s', $file);
        continue;
    }
    $lines = explode("\n", $content);
    foreach ($lines as $line) {
        $line = trim($line);
        if (str_starts_with($line, '(TODO')) {
            $todo     = trim(str_replace(['(TODO', ')'], '', $line));
            $filePath = str_replace($path, '', $file);

            // file name:
            $parts    = explode('/', $filePath);
            $fileName = $parts[count($parts) - 1];

            $url = sprintf('https://github.com/firefly-iii/docs/blob/new-docu/docs/docs%s', $filePath);

            // /explanation/index.md
            $todos[] = sprintf('%s in file [%s](%s)', $todo, $fileName, $url);
        }
    }

    // parse a bunch of possible warnings:
    if (!str_starts_with($content, '# ')) {
        $filePath = str_replace($path, '', $file);

        // file name:
        $parts    = explode('/', $filePath);
        $fileName = $parts[count($parts) - 1];

        $url        = sprintf('https://github.com/firefly-iii/docs/blob/new-docu/docs/docs%s', $filePath);
        $todos[] = sprintf('File [%s](%s) has no page title.', $fileName, $url);
    }

}

foreach ($todos as $todo) {
    echo sprintf('- [ ] %s', $todo) . PHP_EOL;
}
