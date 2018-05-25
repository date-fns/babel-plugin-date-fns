const importNameToFilename = (importName) => {
  return 'date-fns/' + importName.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export default ({ types: t }) => ({
  visitor: {
    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers, source } = node;
      const { value: pkgId } = source;

      if (pkgId !== 'date-fns') {
        return;
      }

      if (!specifiers.filter(t.isImportSpecifier).length) {
        return;
      }

      specifiers.forEach((spec) => {
        const { local, imported } = spec;
        const { name: localName } = local;

        let importedPath = 'date-fns';

        if (t.isImportSpecifier(spec)) {
          const { name: importedName } = imported;
          spec = t.importDefaultSpecifier(t.identifier(localName));

          importedPath = importNameToFilename(importedName);
        }

        path.insertAfter(t.importDeclaration([spec], t.stringLiteral(importedPath)));
      });

      path.remove();
    },
  },
});
