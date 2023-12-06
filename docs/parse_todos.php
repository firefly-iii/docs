<?php
declare(strict_types=1);


$path       = __DIR__ . '/docs';
$extensions = ['md'];
$files = [];
$todos = [];

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
foreach($files as $file) {
    $content = file_get_contents($file);
    if('' === $content) {
        echo sprintf('[!]  File is empty: %s', $file);
        continue;
    }
    $lines = explode("\n", $content);
    /** @var string $line */
    foreach($lines as $line) {
        $line = trim($line);
        if(str_starts_with($line,'(TODO')) {
            $todos[] = sprintf('%s in file %s', str_replace(['(TODO',')'], '', $line), str_replace($path, '', $file));
        }
    }
}

foreach($todos as $todo) {
    echo sprintf('- [ ] %s', $todo) . PHP_EOL;
}
