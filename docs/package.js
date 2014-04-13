(function(pkg) {
  (function() {
  var annotateSourceURL, cacheFor, circularGuard, defaultEntryPoint, fileSeparator, generateRequireFn, global, isPackage, loadModule, loadPackage, loadPath, normalizePath, rootModule, startsWith,
    __slice = [].slice;

  fileSeparator = '/';

  global = window;

  defaultEntryPoint = "main";

  circularGuard = {};

  rootModule = {
    path: ""
  };

  loadPath = function(parentModule, pkg, path) {
    var cache, localPath, module, normalizedPath;
    if (startsWith(path, '/')) {
      localPath = [];
    } else {
      localPath = parentModule.path.split(fileSeparator);
    }
    normalizedPath = normalizePath(path, localPath);
    cache = cacheFor(pkg);
    if (module = cache[normalizedPath]) {
      if (module === circularGuard) {
        throw "Circular dependency detected when requiring " + normalizedPath;
      }
    } else {
      cache[normalizedPath] = circularGuard;
      try {
        cache[normalizedPath] = module = loadModule(pkg, normalizedPath);
      } finally {
        if (cache[normalizedPath] === circularGuard) {
          delete cache[normalizedPath];
        }
      }
    }
    return module.exports;
  };

  normalizePath = function(path, base) {
    var piece, result;
    if (base == null) {
      base = [];
    }
    base = base.concat(path.split(fileSeparator));
    result = [];
    while (base.length) {
      switch (piece = base.shift()) {
        case "..":
          result.pop();
          break;
        case "":
        case ".":
          break;
        default:
          result.push(piece);
      }
    }
    return result.join(fileSeparator);
  };

  loadPackage = function(pkg) {
    var path;
    path = pkg.entryPoint || defaultEntryPoint;
    return loadPath(rootModule, pkg, path);
  };

  loadModule = function(pkg, path) {
    var args, context, dirname, file, module, program, values;
    if (!(file = pkg.distribution[path])) {
      throw "Could not find file at " + path + " in " + pkg.name;
    }
    program = annotateSourceURL(file.content, pkg, path);
    dirname = path.split(fileSeparator).slice(0, -1).join(fileSeparator);
    module = {
      path: dirname,
      exports: {}
    };
    context = {
      require: generateRequireFn(pkg, module),
      global: global,
      module: module,
      exports: module.exports,
      PACKAGE: pkg,
      __filename: path,
      __dirname: dirname
    };
    args = Object.keys(context);
    values = args.map(function(name) {
      return context[name];
    });
    Function.apply(null, __slice.call(args).concat([program])).apply(module, values);
    return module;
  };

  isPackage = function(path) {
    if (!(startsWith(path, fileSeparator) || startsWith(path, "." + fileSeparator) || startsWith(path, ".." + fileSeparator))) {
      return path.split(fileSeparator)[0];
    } else {
      return false;
    }
  };

  generateRequireFn = function(pkg, module) {
    if (module == null) {
      module = rootModule;
    }
    if (pkg.name == null) {
      pkg.name = "ROOT";
    }
    if (pkg.scopedName == null) {
      pkg.scopedName = "ROOT";
    }
    return function(path) {
      var otherPackage;
      if (isPackage(path)) {
        if (!(otherPackage = pkg.dependencies[path])) {
          throw "Package: " + path + " not found.";
        }
        if (otherPackage.name == null) {
          otherPackage.name = path;
        }
        if (otherPackage.scopedName == null) {
          otherPackage.scopedName = "" + pkg.scopedName + ":" + path;
        }
        return loadPackage(otherPackage);
      } else {
        return loadPath(module, pkg, path);
      }
    };
  };

  if (typeof exports !== "undefined" && exports !== null) {
    exports.generateFor = generateRequireFn;
  } else {
    global.Require = {
      generateFor: generateRequireFn
    };
  }

  startsWith = function(string, prefix) {
    return string.lastIndexOf(prefix, 0) === 0;
  };

  cacheFor = function(pkg) {
    if (pkg.cache) {
      return pkg.cache;
    }
    Object.defineProperty(pkg, "cache", {
      value: {}
    });
    return pkg.cache;
  };

  annotateSourceURL = function(program, pkg, path) {
    return "" + program + "\n//# sourceURL=" + pkg.scopedName + "/" + path;
  };

}).call(this);

//# sourceURL=main.coffee
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "README.md": {
      "path": "README.md",
      "content": "tests\n=====\n\nProvide tests to online editor\n",
      "mode": "100644",
      "type": "blob"
    },
    "TODO": {
      "path": "TODO",
      "content": "Investigate Leak Checking\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "Tests\n=====\n\n    module.exports =\n\nGenerate an html template that runs the given script tag strings as tests.\n\n      html: (testScripts) -> \"\"\"\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>Mocha Tests</title>\n          <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n        </head>\n        <body>\n          <div id=\"mocha\"></div>\n          <script src=\"http://strd6.github.io/tests/assert.js\"><\\/script>\n          <script src=\"http://strd6.github.io/tests/mocha.js\"><\\/script>\n          <script>mocha.setup('bdd')<\\/script>\n          #{testScripts}\n          <script>\n            mocha.checkLeaks();\n            mocha.globals(['jQuery']);\n            mocha.run();\n          <\\/script>\n        </body>\n        </html>\n      \"\"\"\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "version: \"0.1.1\"\n",
      "mode": "100644",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = {\n    html: function(testScripts) {\n      return \"<html>\\n<head>\\n  <meta charset=\\\"utf-8\\\">\\n  <title>Mocha Tests</title>\\n  <link rel=\\\"stylesheet\\\" href=\\\"http://strd6.github.io/tests/mocha.css\\\" />\\n</head>\\n<body>\\n  <div id=\\\"mocha\\\"></div>\\n  <script src=\\\"http://strd6.github.io/tests/assert.js\\\"><\\/script>\\n  <script src=\\\"http://strd6.github.io/tests/mocha.js\\\"><\\/script>\\n  <script>mocha.setup('bdd')<\\/script>\\n  \" + testScripts + \"\\n  <script>\\n    mocha.checkLeaks();\\n    mocha.globals(['jQuery']);\\n    mocha.run();\\n  <\\/script>\\n</body>\\n</html>\";\n    }\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.1\"};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.1.1",
  "entryPoint": "main",
  "repository": {
    "id": 12771540,
    "name": "tests",
    "full_name": "distri/tests",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/tests",
    "description": "Provide tests to online editor",
    "fork": false,
    "url": "https://api.github.com/repos/distri/tests",
    "forks_url": "https://api.github.com/repos/distri/tests/forks",
    "keys_url": "https://api.github.com/repos/distri/tests/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/tests/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/tests/teams",
    "hooks_url": "https://api.github.com/repos/distri/tests/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/tests/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/tests/events",
    "assignees_url": "https://api.github.com/repos/distri/tests/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/tests/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/tests/tags",
    "blobs_url": "https://api.github.com/repos/distri/tests/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/tests/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/tests/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/tests/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/tests/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/tests/languages",
    "stargazers_url": "https://api.github.com/repos/distri/tests/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/tests/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/tests/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/tests/subscription",
    "commits_url": "https://api.github.com/repos/distri/tests/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/tests/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/tests/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/tests/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/tests/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/tests/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/tests/merges",
    "archive_url": "https://api.github.com/repos/distri/tests/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/tests/downloads",
    "issues_url": "https://api.github.com/repos/distri/tests/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/tests/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/tests/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/tests/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/tests/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/tests/releases{/id}",
    "created_at": "2013-09-12T00:46:52Z",
    "updated_at": "2014-04-13T21:27:10Z",
    "pushed_at": "2014-04-13T21:20:47Z",
    "git_url": "git://github.com/distri/tests.git",
    "ssh_url": "git@github.com:distri/tests.git",
    "clone_url": "https://github.com/distri/tests.git",
    "svn_url": "https://github.com/distri/tests",
    "homepage": null,
    "size": 312,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 1,
    "forks": 0,
    "open_issues": 1,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});